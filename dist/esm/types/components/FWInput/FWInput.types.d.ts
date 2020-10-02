/// <reference types="react" />
export interface IFWInput {
    label?: string;
    placeholder?: string;
    value?: string;
    multiline?: boolean;
    rows?: number;
    service?: string;
    required?: boolean;
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}
