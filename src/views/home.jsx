export default function Home() {
    return (
        <>
            <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex items-end justify-end p-4  text-center sm:items-center sm:p-0">
                        <div class="relative bg-indigo-600 transform overflow-hidden rounded-lg  text-left shadow-xl transition-all m-5 p-2 sm:w-full sm:max-w-sm">
                            <div class="flex justify-end">
                                <button type="button" class="aeq aml ayw bmj bol boq bpc bps">
                                    <svg
                                        t="1729780332231"
                                        class="icon"
                                        viewBox="0 0 1024 1024"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        p-id="1485"
                                        width="24"
                                        height="24"
                                    >
                                        <path
                                            d="M563.2 512l243.712-243.712a34.304 34.304 0 1 0-51.2-51.2L512 460.8 268.288 219.648a34.304 34.304 0 0 0-51.2 51.2L460.8 512l-241.152 243.712a34.304 34.304 0 0 0 51.2 51.2L512 563.2l243.712 243.712a34.304 34.304 0 1 0 51.2-51.2z"
                                            fill="#cdcdcd"
                                            p-id="1486"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <div class="m-3 p-2 rounded border-2 border-sky-500">
                                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <h3 class="text-baseb font-semibold leading-6 text-white" id="modal-title">
                                        infinite Scrolling
                                    </h3>
                                    <div class="mt-1">
                                        <p class="text-sm text-white">Enable infinite scrolling detection</p>
                                    </div>
                                    <p>scrollY: ${scrollY}</p>
                                </div>
                            </div>
                            <div class="m-3 p-2 border-2 border-sky-500">
                                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <h3 class="text-baseb font-semibold leading-6 text-white" id="modal-title">
                                        infinite Scrolling
                                    </h3>
                                    <div class="mt-1">
                                        <p class="text-sm text-white">Enable infinite scrolling detection</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
