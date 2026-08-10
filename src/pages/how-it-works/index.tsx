import LandingPageLayout from "@/compnents/layouts/LandingPageLayout";
import HowItWorksPage from "@/compnents/views/HowItWorksPage";

const PageHowItWorks = () => {
    return (
        <LandingPageLayout titlePage="VoteDesk | How It Works" name="VoteDesk">
            <HowItWorksPage name="VoteDesk" />
        </LandingPageLayout>
    )
}

export default PageHowItWorks;