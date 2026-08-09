import LandingPageLayout from "@/compnents/layouts/LandingPageLayout";
import HomePage from "@/compnents/views/HomePage";



export default function Home() {
  return (
    <LandingPageLayout titlePage="VoteDesk" name="VoteDesk">
      <HomePage name="VoteDesk" />
    </LandingPageLayout>
  )
}
