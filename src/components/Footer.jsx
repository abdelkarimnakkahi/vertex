import { resourcesLinks, platformLinks, communityLinks } from "../constants";
function Footer() {
  return (
    <div className="mt-20 border-t py-10 border-neutral-700 max-w-5xl mx-auto px-6">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((resource, index) => (
              <li key={index} className="text-neutral-300 hover:text-white">
                <a href={resource.href}>{resource.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Plateform</h3>
          <ul className="space-y-2">
            {platformLinks.map((plateform, index) => (
              <li key={index} className="text-neutral-300 hover:text-white">
                <a href={plateform.href}>{plateform.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((community, index) => (
              <li key={index} className="text-neutral-300 hover:text-white">
                <a href={community.href}>{community.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
