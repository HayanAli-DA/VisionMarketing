import { create } from "zustand";

type UiState = {
  quoteOpen: boolean;
  inquiryOpen: boolean;
  inquiryProductKey: string;
  inquiryProductName: string;
  openQuote: () => void;
  closeQuote: () => void;
  openInquiry: (key: string, name: string) => void;
  closeInquiry: () => void;
};

export const useUi = create<UiState>((set) => ({
  quoteOpen: false,
  inquiryOpen: false,
  inquiryProductKey: "",
  inquiryProductName: "",
  openQuote: () => set({ quoteOpen: true }),
  closeQuote: () => set({ quoteOpen: false }),
  openInquiry: (key, name) =>
    set({ inquiryOpen: true, inquiryProductKey: key, inquiryProductName: name }),
  closeInquiry: () => set({ inquiryOpen: false }),
}));
