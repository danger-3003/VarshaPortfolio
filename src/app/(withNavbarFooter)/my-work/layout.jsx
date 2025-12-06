import { MetaData } from "@/constants/Metadata";

export const metadata = MetaData["work"];

export default function MyWorkLayout({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}