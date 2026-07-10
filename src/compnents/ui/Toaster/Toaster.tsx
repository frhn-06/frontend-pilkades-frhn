import { Card, CardBody, cn } from "@heroui/react";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

interface TypeProps {
	type: string;
  message: string;
}
const Toaster = (props: TypeProps) => {
		const {
			type,
      message
		} = props;

    return (
		<div className="absolute top-2 right-2 max-w-63">
			<Card className={cn({"bg-success" : type === "success", "bg-danger" : type === "error"})} fullWidth >
				<CardBody className="flex-row gap-3">
					<div>
            {type === "success" ? <FaCheckCircle className="w-8 h-8 text-white" /> : <IoIosCloseCircle className="w-8 h-8 text-white" />}
					</div>

					<p className="text-white font-semibold">
            {message}
					</p>				
				</CardBody>
			</Card>

		</div>
    )
}


export default Toaster;