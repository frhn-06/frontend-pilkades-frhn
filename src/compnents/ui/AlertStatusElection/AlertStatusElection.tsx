import { Alert } from "@heroui/react";

interface TypeProps {
  title: string;
  textContent: string;
}
const AlertStatusElection = (props: TypeProps) => {
    const {
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
      </div>
    )
}

export default AlertStatusElection;