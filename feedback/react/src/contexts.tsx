import { createContext } from 'react';

export const MediaQueryContext = createContext<"mobile"|"laptop"|null>(null);
