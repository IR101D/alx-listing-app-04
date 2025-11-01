
const Footer : React.FC = () => {
    return (
        <footer className="bg-gray-100 border-t m-12">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-red-500">Airbnb clone</h2>
                <p className="mt-2 text-gray-600">Your perfect stay anywhere in the world</p>
              </div>
            </div>

            <div >
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li><link href="#"/>About Us</li>
                <li><link href="#"/>Careers</li>
                <li><link href="#"/>Press</li>
              </ul>
            </div>
            <div >
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li><link href="#"/>Help Center</li>
                <li><link href="#"/>Cancelation Options</li>
                <li><link href="#"/>Safety Information</li>
              </ul>
            </div>
            <div>
                <h3 className="font-semibold mb-3">Follow Us</h3>
                <div className="flex space-x-4 text-gray-600">
                    <a href="#" aria-label="Facebook" className="hover:text-red-500">
                      Facebook
                    </a>
                    <a href="#" aria-label="Twitter" className="hover:text-red-500">
                      Twitter
                    </a>
                    <a href="#" aria-label="Instagram" className="hover:text-red-500">
                      Instagram
                    </a>
                </div>
            </div>
            <div className="border-t py-4 text-center text-gray-500 text-sm">
                 ©{new Date().getFullYear()} AirbnbClone. All rights reserved.
            </div>
        </footer>
    )
}
export default Footer;