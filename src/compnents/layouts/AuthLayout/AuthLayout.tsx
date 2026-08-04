import PageHead from "@/compnents/commons/PageHead";

interface TypeProps {
    children: React.ReactNode;
    title: string
}

const AuthLayout = (props: TypeProps) => {
    const {
        children,
        title
    } = props;

    return (
        <>
            <PageHead title={title} />

            <main className="min-h-screen max-w-[3000px] mx-auto">
              {children}
            </main>
        </>
    )
}

export default AuthLayout;