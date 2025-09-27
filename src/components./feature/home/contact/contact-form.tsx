"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import { capitalizeFirstLetter, cn } from "../../../../utils";

interface IContactFormData {
  name: string;
  email: string;
  message: string;
}

const initialData = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState<IContactFormData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) {
        errors[key] = `${capitalizeFirstLetter(key)} is required`;
      }
      if (key === "email" && value && !emailRegex.test(value)) {
        errors[key] = "Invalid Email!";
      }
    });
    return errors;
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    e.stopPropagation();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSending(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        formData as unknown as Record<string, string>,
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
      );
      toast.success("Message send successfully", { id: "message-success" });
    } catch (error) {
      console.error("Failed to send message: ", error);
      toast.error("Failed to send message. Pleas try again later", {
        id: "message-failed",
      });
    } finally {
      setFormData(initialData);
      setIsSending(false);
    }
    return;
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto mb-20 lg:max-w-3xl">
      <div className="mb-4 grid grid-cols-2 gap-x-4">
        <div className="col-span-2 lg:col-span-1">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
            className="mb-8 w-full appearance-none rounded-lg border border-emerald-950 bg-transparent px-3 py-2 focus:border-stone-400 focus:outline-none"
          />
          {errors.name && (
            <p className="text=sm text-rose-800">{errors.name}</p>
          )}
        </div>
        <div className="col-span-2 lg:col-span-1">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            className="mb-8 w-full appearance-none rounded-lg border border-emerald-950 bg-transparent px-3 py-2 focus:border-stone-400 focus:outline-none"
          />
          {errors.email && (
            <p className="text=sm text-rose-800">{errors.email}</p>
          )}
        </div>
        <div className="col-span-2 mb-4">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="Message"
            onChange={handleChange}
            className="mb-8 w-full appearance-none rounded-lg border border-emerald-950 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            rows={6}
          />
          {errors.message && (
            <p className="text=sm text-rose-800">{errors.message}</p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className={cn(
          "w-full rounded border bg-emerald-950 px-4 py-2 text-sm font-semibold text-orange-50 hover:bg-emerald-900",
          isSending && "cursor-not-allowed"
        )}
        disabled={isSending}
      >
        <div className="flex items-center justify-center gap-2">
          {isSending ? "Sending..." : "Send"}
          <FiSend />
        </div>
      </button>
    </form>
  );
};

export default ContactForm;
