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

            <main className="min-h-screen px-4">
              {children}
            </main>
        </>
    )
}

export default AuthLayout;