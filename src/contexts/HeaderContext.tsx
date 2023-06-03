/* eslint-disable no-unused-vars */

import { create } from "zustand";

type VariantType = "initial" | "finishedOrder";

interface UseHeaderContextType {
  variant: VariantType;
  changeHeaderVariant: (variant: VariantType) => void;
}

export const useHeaderContext = create<UseHeaderContextType>((set) => ({
  variant: "initial",
  changeHeaderVariant: (variant: VariantType) =>
    set(() => ({ variant: variant })),
}));
