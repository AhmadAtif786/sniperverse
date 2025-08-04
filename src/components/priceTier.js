// components/PricingTiers.tsx

export default function PricingTiers() {
    const tiers = [
        {
            title: "Free Tier",
            price: "£0",
            period: "",
            features: [
                "Manual Sniping",
                "AI Rug Scoring",
                "XP Tracking",
                "Invite Link",
                "Basic Snipe Log",
                "0.9% Fee",
            ],
            button: "Start Free",
        },
        {
            title: "Pro",
            price: "£19.99",
            period: "/ month",
            features: [
                "Auto-Buy Engine",
                "Wallet Whitelists",
                "Cooldown Reduction",
                "Priority Alerts",
                "Trait Boost Access",
                "Invite XP Multiplier",
                "Auto-Sell (Soon)",
                "0.65% Fee",
            ],
            button: "Upgrade to Pro",
        },
        {
            title: "Pro + XP Pack",
            price: "£29.99",
            period: "/ month",
            features: [
                "All Pro features",
                "2× XP Boost (Permanent)",
                "2× Invite XP Multiplier",
                "Monthly Trait Reroll",
                "Early Airdrop Priority",
                "Trait Crafting (Soon)",
                "0.45% Fee",
            ],
            button: "Get Pro+ Now",
        },
        {
            title: "Founders Tier",
            price: "£49.99",
            period: "/ month",
            features: [
                "All Pro+ benefits",
                "Early Feature Access",
                "Finicon Class Unlocks",
                "Trait Staking Beta",
                "OG Bot Badge",
                "Monthly Reroll, Voting Rights",
                "Merch + Drop Priority",
                "0.25% Fee",
            ],
            button: "Join Founders Tier",
        },
    ];

    return (
        <section className="bg-[#01061a] text-white py-16 px-4 font-sans">
            <div className="max-w-7xl mx-auto text-center">
                <h4 className="text-center text-[#00ffad] text-sm font-semibold mb-1">Pricing</h4>
                <h2 className="text-center text-white text-2xl font-bold mb-8">Pricing Tiers</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tiers.map((tier, index) => (
                        <div
                            key={index}
                            className="bg-[#0e1e2c] border border-[#00e5ff] rounded-xl p-2 flex flex-col justify-between hover:shadow-xl transition"
                        >
                            <div>
                                <div style={{
                                    background: 'linear-gradient(0deg, rgba(21, 255, 223, 0.21) 0.29%, rgba(0, 201, 101, 0) 99.57%)'
                                    ,
                                    angle: '0 deg',
                                    opacity: 1,

                                    mixBlendMode: 'Exclusion',
                                    borderRadius: '10.65px'
                                }}>
                                    <h3 className="text-lg font-semibold mb-2">{tier.title}</h3>
                                    <div className="pb-4" style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>  <div className="text-3xl font-bold text-white mb-1">{tier.price}</div>

                                        <div className="text-sm text-gray-300 ">{tier.period}</div>
                                    </div>
                                </div>
                                <ul className="text-sm text-gray-300 text-left space-y-2 list-style-none">
                                    {tier.features.map((feature, i) => (
                                        <li className="list-style-none mt-3" style={{fontSize:'16px',textAlign:'center'}} key={i}> {feature}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-6">
                                <button className="px-5 py-2.5 rounded-md font-semibold text-sm bg-[linear-gradient(90deg,#15FFDF_2.27%,#00C965_97.73%)] text-black shadow-md hover:opacity-90 transition transform rotate-[0.1deg]">
                                    {tier.button}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
