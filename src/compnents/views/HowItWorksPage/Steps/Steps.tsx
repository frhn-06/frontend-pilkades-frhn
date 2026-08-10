import listConstant, { IIsi } from "./listConstant";



const Steps = () => {

    return (
      <section className="relative w-full pt-22 lg:pt-36 pb-48 px-4">
        <div className="flex flex-col gap-12">

          <div className="w-full max-w-6xl mx-auto bg-red-600 rounded-4xl min-h-1000 px-4 py-8 lg:px-8 lg:py-16 shadow-xl shadow-red-500/40">
            <div className="flex flex-col gap-22">
              {listConstant.map((list, i) => (
                <div key={i}>
                  <h1 className="text-gray-200 font-bold mb-2">
                    ~ Fase {i+1} ~
                  </h1>
                  <h2 className="text-white text-2xl lg:text-3xl font-bold mb-6">
                    {list.title}
                  </h2>

                  <div className="flex flex-col gap-6">
                    {list.isi.map((item: IIsi, i) => (
                      <div key={i} className="flex flex-col lg:flex-row gap-8 justify-between">
                        <table className="h-fit text-white">
                          <tbody>
                            <tr>
                              <td className="px-1 font-bold text-xl flex items-start pb-1">
                                {i + 1}.
                              </td>
                              <td className="px-1 font-semibold text-xl pb-1">
                                {item.title}
                              </td>
                            </tr>
                            <tr>
                              <td className="px-1" />

                              <td className="px-1">
                                {item.description}
                              </td>
                            </tr>
                            {item.nb && (
                              <tr>
                                <td className="px-1" />

                                <td className="px-1 text-gray-200 italic pt-2">
                                  {item.nb}
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                        <div className="w-full max-w-lg shrink-0 rounded-lg overflow-hidden">
                          {item.photo}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              ))}
            </div>
          </div>
        
        </div>
      </section>
    )
}

export default Steps;