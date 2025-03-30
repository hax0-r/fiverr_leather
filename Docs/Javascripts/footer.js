const footer = document.getElementById("footer");

footer.innerHTML = `
<footer class="w-full mt-16 md:mt-28">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <!--Grid-->
                <div
                    class="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-5 md:gap-8 md:py-10  py-5 max-sm:max-w-sm max-sm:mx-auto ">
                    <div class="mb-10 lg:col-span-2 lg:mb-0">
                        <a href="./index.html" class="flex justify-center lg:justify-start">
                            <img src="./Docs/Images/logo.png" class="h-20" alt="logo">
                        </a>
                        <p class="pt-8 text-sm text-gray-800 lg:max-w-xs text-center lg:text-left"> Excellence in
                            Leather Tanning Since 1952</p>
                    </div>
                    <!--End Col-->
                    <!--End Col-->
                    <div class="lg:mx-auto text-left ">
                        <h4 class="text-lg text-[#000] font-medium mb-5">Links</h4>
                        <ul class="text-sm  transition-all duration-500">
                            <li class="mb-4"><a href="./index.html" class="text-gray-600 hover:underline">Home</a></li>
                            <li class="mb-4"><a href="./about-us.html" class="text-gray-600 hover:underline">About
                                    Us</a></li>
                            <li class="mb-4"><a href="./products.html"
                                    class="text-gray-600 hover:underline">Products</a></li>
                            <li class="mb-4"><a href="./contactUs.html"
                                    class="text-gray-600 hover:underline">Contact Us</a></li>
                        </ul>
                    </div>

                </div>
                <!--Grid-->
                <div class="py-7 border-t border-gray-200">
                    <div class="flex items-center justify-center">
                        <span class="text-sm text-gray-400 ">©<a href="./index.html">AIT Industries</a> 2025, All rights
                            reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
`
