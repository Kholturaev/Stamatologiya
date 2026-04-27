const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

type BookingPayload = {
  name?: string;
  phone?: string;
  locale?: "ru" | "uz";
};

function isValidPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 9 && digits.length <= 15;
}

function getMessages(locale: "ru" | "uz") {
  if (locale === "ru") {
    return {
      invalidName: "Введите имя длиной не менее 2 символов.",
      invalidPhone: "Введите корректный номер телефона.",
      serverConfig: "Telegram бот еще не настроен.",
      submitFailed: "Не удалось отправить заявку. Попробуйте еще раз.",
      success: "Заявка отправлена. Мы скоро свяжемся с вами.",
    };
  }

  return {
    invalidName: "Kamida 2 ta belgidan iborat ism kiriting.",
    invalidPhone: "To'g'ri telefon raqamini kiriting.",
    serverConfig: "Telegram bot hali sozlanmagan.",
    submitFailed: "So'rov yuborilmadi. Qayta urinib ko'ring.",
    success: "So'rov yuborildi. Tez orada siz bilan bog'lanamiz.",
  };
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as BookingPayload;
    const locale = body.locale === "ru" ? "ru" : "uz";
    const messages = getMessages(locale);
    const name = body.name?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";

    if (name.length < 2) {
      return Response.json({ message: messages.invalidName }, { status: 400 });
    }

    if (!isValidPhone(phone)) {
      return Response.json({ message: messages.invalidPhone }, { status: 400 });
    }

    if (
      !TELEGRAM_BOT_TOKEN ||
      !TELEGRAM_CHAT_ID ||
      TELEGRAM_BOT_TOKEN.includes("REPLACE_ME") ||
      TELEGRAM_CHAT_ID.includes("REPLACE_ME")
    ) {
      return Response.json({ message: messages.serverConfig }, { status: 500 });
    }

    const text = [
      "🦷 Yangi qabul so'rovi",
      `👤 Ism: ${name}`,
      `📞 Telefon: ${phone}`,
      `🌐 Til: ${locale.toUpperCase()}`,
      `🕒 Vaqt: ${new Date().toLocaleString("uz-UZ")}`,
    ].join("\n");

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
        }),
      },
    );

    if (!telegramResponse.ok) {
      return Response.json({ message: messages.submitFailed }, { status: 502 });
    }

    return Response.json({ message: messages.success });
  } catch {
    return Response.json(
      { message: "Unexpected server error." },
      { status: 500 },
    );
  }
}
