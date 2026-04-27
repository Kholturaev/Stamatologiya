import { useState } from "react";
import { X, Calendar } from "lucide-react";
import { useSiteUI } from "@/components/providers/SiteProvider";
import { translations } from "@/lib/translations";

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingForm({ isOpen, onClose }: BookingFormProps) {
  const { locale } = useSiteUI();
  const t = translations[locale].booking;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setPhone("");
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-zinc-900 rounded-3xl max-w-md w-full p-8 relative shadow-2xl dark:shadow-zinc-950/70">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-full flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5 text-gray-600 dark:text-zinc-300" />
        </button>

        {!submitted ? (
          <>
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-950 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>

            <h3 className="text-3xl font-bold text-gray-900 dark:text-zinc-100 mb-2 text-center">
              {t.title}
            </h3>
            <p className="text-gray-600 dark:text-zinc-300 mb-8 text-center">
              {t.subtitle}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-zinc-200 mb-2"
                >
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-zinc-100 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder={t.namePlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 dark:text-zinc-200 mb-2"
                >
                  {t.phoneLabel}
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-zinc-100 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="+1 (234) 567-890"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                {t.submitButton}
              </button>
            </form>

            <p className="text-sm text-gray-500 dark:text-zinc-400 text-center mt-6">
              {t.notice}
            </p>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-4xl">✓</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-2">
              {t.successTitle}
            </h3>
            <p className="text-gray-600 dark:text-zinc-300">
              {t.successMessage}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
