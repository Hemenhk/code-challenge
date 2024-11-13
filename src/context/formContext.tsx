"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface FormContextType {
  step: number;
  firstName: string;
  title: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context
const FormContext = createContext<FormContextType | undefined>(undefined);

// Provider component props
interface FormProviderProps {
  children: ReactNode;
}

// Counter Provider component
export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [title, setTitle] = useState("");


  console.log("first", firstName)
  console.log("title", title)


  return (
    <FormContext.Provider
      value={{
        step,
        firstName,
        title,
        setStep,
        setFirstName,
        setTitle,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

// Custom hook to use the CounterContext
export const useFormContext = (): FormContextType => {
  const context = useContext(FormContext);
//   console.log("context", context)
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
