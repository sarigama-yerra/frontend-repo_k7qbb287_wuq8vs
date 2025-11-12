import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import * as Accordion from '@radix-ui/react-accordion'
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from 'react-icons/fa'
import { MdEmail, MdCalendarToday } from 'react-icons/md'

const Section = ({ children }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    className="py-24"
  >
    {children}
  </motion.section>
)

const BackgroundEffects = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-[#050505]" />
    <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_-10%,rgba(0,240,255,0.06),transparent_60%)]" />
    <motion.div
      className="absolute -top-24 -left-24 h-96 w-96 rounded-full opacity-30"
      style={{ background: 'radial-gradient(circle at 30% 30%, #00F0FF55, transparent 60%)' }}
      animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute top-1/4 -right-24 h-[28rem] w-[28rem] rounded-full opacity-20"
      style={{ background: 'radial-gradient(circle at 70% 70%, #9E00FF55, transparent 60%)' }}
      animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full opacity-20"
      style={{ background: 'radial-gradient(circle at 50% 50%, #39FF1455, transparent 60%)' }}
      animate={{ y: [0, 10, 0], x: [0, 15, 0] }}
      transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
    />
    <div className="absolute inset-0 [background-image:radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:20px_20px]" />
  </div>
)

const Navbar = () => (
  <div className="sticky top-0 z-50 backdrop-blur-lg border-b border-[#1E1E1E] bg-[#050505]/60">
    <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
      <a href="#" className="font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-400">EvalX</a>
      <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-200">
        <a href="#" className="hover:text-white transition">Home</a>
        <a href="#demo" className="hover:text-white transition">Demo</a>
        <a href="#pricing" className="hover:text-white transition">Pricing</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
        <a href="#faq" className="hover:text-white transition">FAQ</a>
      </nav>
      <button className="text-neutral-200 hover:text-white transition" aria-label="Toggle theme">
        <FiMoon />
      </button>
    </div>
  </div>
)

const Hero = () => (
  <div className="relative">
    <div className="mx-auto max-w-6xl px-6 pt-16 pb-10 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400"
        >
          EvalX: Secure, Scalable Code Execution
        </motion.h1>
        <p className="mt-4 text-neutral-300">
          <span className="text-neon-green [text-shadow:0_0_8px_#39FF14]">No <code>Aptitude</code> and <code>Reasoning</code></span> were learnt to Build this!
        </p>
        <p className="mt-4 text-neutral-400 max-w-xl">
          The robust, open-source API for running untrusted code in secure, isolated sandboxes. Focus on your platform, not your infrastructure.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#demo" className="px-5 py-3 rounded-md text-[#050505] font-medium bg-gradient-to-r from-neon-cyan to-neon-purple shadow-[0_0_20px_#00F0FF66] hover:shadow-[0_0_30px_#00F0FFAA] transition">View Demo</a>
          <a href="#pricing" className="px-5 py-3 rounded-md text-neon-cyan border border-neon-cyan hover:bg-neon-cyan/10 hover:shadow-[0_0_20px_#00F0FF66] transition">View Pricing</a>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        className="relative h-[420px] w-full rounded-xl overflow-hidden border border-[#1E1E1E] bg-[#0a0a0a]"
      >
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>
    </div>
  </div>
)

const Demo = () => (
  <Section>
    <div id="demo" className="mx-auto max-w-6xl px-6">
      <h2 className="text-3xl md:text-4xl font-semibold text-white">Simple, Powerful API</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div className="rounded-lg border border-[#1E1E1E] bg-[#0b0b0b]">
          <div className="border-b border-[#1E1E1E] px-4 py-3 text-sm text-neutral-300">Examples</div>
          <TabsPrimitive.Root defaultValue="curl">
            <TabsPrimitive.List className="flex gap-2 px-4 py-2">
              <TabsPrimitive.Trigger value="curl" className="px-3 py-1.5 rounded-md text-sm bg-[#111] text-neutral-300 data-[state=active]:text-white data-[state=active]:bg-[#1a1a1a] transition">cURL</TabsPrimitive.Trigger>
              <TabsPrimitive.Trigger value="python" className="px-3 py-1.5 rounded-md text-sm bg-[#111] text-neutral-300 data-[state=active]:text-white data-[state=active]:bg-[#1a1a1a] transition">Python</TabsPrimitive.Trigger>
            </TabsPrimitive.List>
            <TabsPrimitive.Content value="curl" className="px-4 pb-4">
<pre className="text-sm leading-relaxed font-['Geist_Mono',monospace] text-neutral-200 bg-[#0c0c0c] p-4 rounded-md overflow-auto">{`curl -X POST http://api.evalx.com/execute \
-H "Content-Type: application/json" \
-d '{
  "language": "java24",
  "version": "24",
  "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello, EvalX!\");\n  }\n}",
  "stdin": ""
}'`}
</pre>
            </TabsPrimitive.Content>
            <TabsPrimitive.Content value="python" className="px-4 pb-4">
<pre className="text-sm leading-relaxed font-['Geist_Mono',monospace] text-neutral-200 bg-[#0c0c0c] p-4 rounded-md overflow-auto">{`import requests

response = requests.post(
    "http://api.evalx.com/execute",
    json={
        "language": "python",
        "version": "3.10",
        "code": "print('Hello, EvalX!')"
    }
)

print(response.json())`}
</pre>
            </TabsPrimitive.Content>
          </TabsPrimitive.Root>
        </div>
        <div className="rounded-lg border border-[#1E1E1E] bg-[#0b0b0b]">
          <div className="border-b border-[#1E1E1E] px-4 py-3 text-sm text-neutral-300">Response</div>
          <div className="p-4">
<pre className="text-sm leading-relaxed font-['Geist_Mono',monospace] text-neutral-200 bg-[#0c0c0c] p-4 rounded-md overflow-auto">{`{
  "status": "Completed",
  "results": [
    {
      "compile_time": 0.0,
      "stdout": "Hello, EvalX!\n",
      "stderr": null,
      "exit_code": 0,
      "run_time": 0.02,
      "space_consumed": "128 KB"
    }
  ]
}`}
</pre>
          </div>
        </div>
      </div>
    </div>
  </Section>
)

const Pricing = () => (
  <Section>
    <div id="pricing" className="mx-auto max-w-6xl px-6">
      <h2 className="text-3xl md:text-4xl font-semibold text-white">Flexible Plans for Every Scale</h2>
      <TabsPrimitive.Root defaultValue="volume" className="mt-6">
        <TabsPrimitive.List className="flex flex-wrap gap-2">
          <TabsPrimitive.Trigger value="volume" className="px-3 py-1.5 rounded-md text-sm bg-[#111] text-neutral-300 data-[state=active]:text-white data-[state=active]:bg-[#1a1a1a] transition">Volume</TabsPrimitive.Trigger>
          <TabsPrimitive.Trigger value="ppu" className="px-3 py-1.5 rounded-md text-sm bg-[#111] text-neutral-300 data-[state=active]:text-white data-[state=active]:bg-[#1a1a1a] transition">Pay Per Use</TabsPrimitive.Trigger>
          <TabsPrimitive.Trigger value="self" className="px-3 py-1.5 rounded-md text-sm bg-[#111] text-neutral-300 data-[state=active]:text-white data-[state=active]:bg-[#1a1a1a] transition">Self-Hosted</TabsPrimitive.Trigger>
        </TabsPrimitive.List>
        <TabsPrimitive.Content value="volume" className="mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Pro', price: '$20' },
              { title: 'Ultra', price: '$38', tag: 'RECOMMENDED' },
              { title: 'Mega', price: '$65' },
              { title: 'Enterprise', price: '$102' },
            ].map((p) => (
              <motion.div
                whileHover={{ y: -6 }}
                key={p.title}
                className="relative rounded-xl border border-[#1E1E1E] bg-[#0b0b0b] p-6 shadow-[0_0_0_1px_#0b0b0b] hover:shadow-[0_0_20px_#00F0FF33] transition"
              >
                {p.tag && (
                  <span className="absolute -top-3 right-4 text-[10px] tracking-wide bg-gradient-to-r from-neon-cyan to-neon-purple text-[#050505] px-2 py-1 rounded-full">{p.tag}</span>
                )}
                <div className="text-lg font-medium text-white">{p.title}</div>
                <div className="mt-2 text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">{p.price}</div>
                <button className="mt-6 w-full rounded-md border border-neon-cyan text-neon-cyan py-2 hover:bg-neon-cyan/10 hover:shadow-[0_0_20px_#00F0FF66] transition">Choose</button>
              </motion.div>
            ))}
          </div>
        </TabsPrimitive.Content>
        <TabsPrimitive.Content value="ppu" className="mt-6">
          <motion.div whileHover={{ y: -6 }} className="rounded-xl border border-[#1E1E1E] bg-[#0b0b0b] p-8 hover:shadow-[0_0_20px_#00F0FF33] transition">
            <div className="text-2xl font-semibold text-white">Pay Per Use</div>
            <div className="mt-2 flex items-end gap-2">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">$0.0005</div>
              <div className="text-neutral-400">/ per submission</div>
            </div>
            <button className="mt-6 rounded-md border border-neon-cyan text-neon-cyan px-4 py-2 hover:bg-neon-cyan/10 hover:shadow-[0_0_20px_#00F0FF66] transition">Start Now</button>
          </motion.div>
        </TabsPrimitive.Content>
        <TabsPrimitive.Content value="self" className="mt-6">
          <motion.div whileHover={{ y: -6 }} className="rounded-xl border border-[#1E1E1E] bg-[#0b0b0b] p-8 hover:shadow-[0_0_20px_#00F0FF33] transition">
            <div className="text-2xl font-semibold text-white">Self-Hosted</div>
            <p className="mt-2 text-neutral-300">Deploy the open-source EvalX engine on your own infrastructure for full control and unlimited volume.</p>
            <button className="mt-6 rounded-md border border-neon-cyan text-neon-cyan px-4 py-2 hover:bg-neon-cyan/10 hover:shadow-[0_0_20px_#00F0FF66] transition">Request Trial</button>
          </motion.div>
        </TabsPrimitive.Content>
      </TabsPrimitive.Root>
    </div>
  </Section>
)

const Contact = () => (
  <Section>
    <div id="contact" className="mx-auto max-w-6xl px-6">
      <p className="text-xl text-neutral-300">Have a question? Ready to discuss your project? We're here to help.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[
          { icon: <MdEmail className="text-neon-purple" />, title: 'Email', desc: 'contact@evalx.com' },
          { icon: <MdCalendarToday className="text-neon-purple" />, title: 'Book a Call', desc: 'Schedule a 30-min intro' },
          { icon: <FaDiscord className="text-neon-purple" />, title: 'Discord', desc: 'Join our community' },
        ].map((c) => (
          <motion.div
            key={c.title}
            whileHover={{ y: -4 }}
            className="rounded-xl border border-[#1E1E1E] bg-[#111111] p-6 hover:shadow-[0_0_20px_#9E00FF55] transition"
          >
            <div className="text-2xl">{c.icon}</div>
            <div className="mt-3 text-lg font-medium text-white">{c.title}</div>
            <div className="text-neutral-300">{c.desc}</div>
          </motion.div>
        ))}
      </div>
      <p className="mt-8 text-neutral-400">Whether you're building the next big coding platform, integrating AI-powered code execution, or need enterprise-grade sandboxed environments, we're here to help you succeed.</p>
      <p className="mt-2 text-neutral-400">Prefer email? contact@evalx.com</p>
    </div>
  </Section>
)

const FAQ = () => (
  <Section>
    <div id="faq" className="mx-auto max-w-6xl px-6">
      <h2 className="text-3xl md:text-4xl font-semibold text-white">Frequently Asked Questions</h2>
      <Accordion.Root type="single" collapsible className="mt-6 space-y-3">
        {[
          { q: 'Is there a free tier for development?', a: 'Yes. You can start with a generous free tier for local development and small projects.' },
          { q: 'Self-hosted vs. Cloud?', a: 'Use Cloud for zero-maintenance elasticity. Choose self-hosted for full control and data residency.' },
          { q: 'What languages are supported?', a: 'We support popular languages including Python, Java, JavaScript, C/C++, and more.' },
          { q: 'How do you ensure security?', a: 'Isolated containers, strict seccomp profiles, and resource limits keep executions safe.' },
          { q: 'How fast is it?', a: 'Cold starts are optimized with warm pools. Median latency is under 500ms for simple runs.' },
          { q: 'How do I integrate?', a: 'Use the REST API with a single POST request. SDKs are available for major languages.' },
        ].map((item, idx) => (
          <Accordion.Item key={idx} value={`item-${idx}`} className="overflow-hidden rounded-lg border border-[#1E1E1E] bg-[#0b0b0b]">
            <Accordion.Header>
              <Accordion.Trigger className="w-full text-left px-4 py-3 text-white data-[state=open]:bg-[#111] transition">
                {item.q}
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-0">
              <AnimatePresence>
                <motion.div
                  key={`content-${idx}`}
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { height: 'auto', opacity: 1 },
                    collapsed: { height: 0, opacity: 0 },
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-4 py-3 text-neutral-300">{item.a}</div>
                </motion.div>
              </AnimatePresence>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  </Section>
)

const Footer = () => (
  <footer className="mt-16 border-t border-[#1E1E1E]">
    <div className="mx-auto max-w-6xl px-6 py-10 text-center">
      <p className="text-neutral-300">The open source code execution engine powering millions of code executions worldwide. Robust, scalable, and secure.</p>
      <div className="mt-6 flex justify-center gap-6 text-neutral-300">
        <a href="#" className="hover:text-white transition"><FaGithub /></a>
        <a href="#" className="hover:text-white transition"><FaLinkedin /></a>
        <a href="#" className="hover:text-white transition"><FaInstagram /></a>
      </div>
      <div className="mt-6 text-neutral-400">
        Created by: 
        <a className="underline hover:text-white mx-1" href="#">Parisa Gunasekhar</a>,
        <a className="underline hover:text-white mx-1" href="#">Kamma Kethan Sai</a>,
        <a className="underline hover:text-white mx-1" href="#">Mathi Praveen</a>,
        <a className="underline hover:text-white mx-1" href="#">Telukontla Shiva</a>.
      </div>
    </div>
  </footer>
)

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white relative">
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <Demo />
      <Pricing />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  )
}
