import { Accordion, AccordionItem } from "@heroui/react";
import listConstant from "./listConstant";

interface TypeProps {
  name: string;
}

const FAQ = (props: TypeProps) => {
    const {
      name
    } = props;

    return (
			<section className="relative min-h-svh w-full pt-22 lg:pt-36 pb-48 px-4">
        <div className="w-full max-w-7xl mx-auto">
          <div className="w-full max-w-3xl mx-auto mb-24">
						<h1 className="font-semibold text-2xl lg:text-3xl text-red-600 text-center mb-4">
              INFORMASI
            </h1>
            <h2 className="text-gray-800 text-xl text-center mb-1">
              Masih Ingin Tahu Lebih Banyak?
            </h2>
            <p className="text-gray-500 text-center">
              Temukan jawaban atas beberapa pertanyaan umum tentang {name} dan proses pemilihan digital.
						</p>
					</div>

					<div>
						<div className="shadow-2xl/40 shadow-red-500 rounded-xl">
							<Accordion variant="shadow">
								{listConstant(name).map((list, i) => (
									<AccordionItem key={i} aria-label={list.question} title={(
										<p className="text-gray-700">
											{list.question}
										</p>
									)}>
										{list.answer.map((anwar, i) => (
											<p key={i} className="text-gray-500">
												{anwar}
											</p>
										))}
									</AccordionItem>
								))}
							</Accordion>
						</div>

						
					</div>
				</div>
			</section>
    )
}

export default FAQ;