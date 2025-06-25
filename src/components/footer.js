import React from 'react'

const Footer = () => {
    return (
        <div>   <footer className="text-center text-xs text-gray-500 py-8 border-t border-gray-800 mt-16 bg-[#0a0a12]">
            <div className="mb-2">
                <a href="#" className="mx-2 hover:text-white transition-colors">Home</a>
                <a href="#" className="mx-2 hover:text-white transition-colors">Vision</a>
                <a href="#" className="mx-2 hover:text-white transition-colors">Roadmap</a>
                <a href="#" className="mx-2 hover:text-white transition-colors">Pricing</a>
                <a href="#" className="mx-2 hover:text-white transition-colors">Join</a>
            </div>
            <div className="mb-2">
                <a href="#" className="mx-2 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="mx-2 hover:text-white transition-colors">Telegram</a>
                <a href="#" className="mx-2 hover:text-white transition-colors">Discord</a>
                <a href="#" className="mx-2 hover:text-white transition-colors">Mirror</a>
            </div>
            <div className="mb-2">Contact: support@snipersverse.com</div>
            <div className="mb-2">Disclaimer: Use at your own risk. Not financial advice.</div>
            <div>© 2025 SnipersVerse – All rights reserved</div>
        </footer>
        </div>
    )
}

export default Footer