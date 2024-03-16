import { format } from "date-fns";
import { fr } from "date-fns/locale";

export function displayDate(date: string) {
  return format(new Date(date), "dd/MM/yyyy", { locale: fr });
}
