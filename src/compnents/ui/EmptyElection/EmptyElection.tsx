import { Alert, Button, Link } from "@heroui/react"

interface TypeProps {
  href?: string;
  title: string;
  textContent: string;
}
const EmptyElection = (props: TypeProps) => {
    const {
      href = "/admin/election",
      title,
      textContent
    } = props;

    return (
        <div>
          <Alert color="warning" className="mb-6">
            <p>
              {title}
            </p>
            <p>
              {textContent}
            </p>
          </Alert>
          <Button as={Link} href={href} color="warning" className="text-white">
            Buat Election
          </Button>
        </div>
    )
}

export default EmptyElection;