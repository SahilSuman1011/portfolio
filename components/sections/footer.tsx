export function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] py-12">
      <div className="container max-w-[640px]">
        <div className="grid grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-medium">Navigation</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="#home" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">Social</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a
                  href="https://github.com/SahilSuman1011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sahilsuman11/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/SahilSuman1111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://peerlist.io/sahilsuman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Peerlist
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">Links</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="https://manuarora.in" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Portfolio inspired by Manu Paaji 🧡
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

