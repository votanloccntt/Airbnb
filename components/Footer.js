import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <div className="font-bold">ABOUT</div>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <div className="font-bold">COMMUNITY</div>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>Its a pretty awesome clone</p>
        <p>Referrals accepted</p>
        <p>Tan Loc</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <div className="font-bold">ABOUT</div>
        <p>HOST</p>
        <p>Chinese Shaman</p>
        <p>Nextjs</p>
        <p>J4love</p>
        <p>TailWindcss</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <div className="font-bold">SUPPORT</div>
        <p>Help Center</p>
        <p>Trust and Safely</p>
        <p>One more night</p>
        <p>High to low</p>
        <p>Gau gau gau</p>
      </div>
    </div>
  );
}

export default Footer;
