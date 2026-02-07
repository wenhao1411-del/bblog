import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft, CheckCircle, AlertTriangle, Users, Target, DollarSign } from 'lucide-react';

export function SourcingAgentGuide() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1753012520514-2365262cc4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3VyY2luZyUyMHByb2N1cmVtZW50JTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzY5NTE5MDU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Sourcing and Procurement"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </section>

      {/* Content */}
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <Link to="/resources" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Resources
            </Link>

            <h1 className="text-4xl md:text-5xl mb-6 text-gray-900">Sourcing Agent Guide</h1>
            <p className="text-xl text-gray-600 mb-6">
              Your comprehensive guide to understanding, selecting, and working with sourcing agents in China for maximum success
            </p>

            <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white">
                GS
              </div>
              <div>
                <div className="text-gray-900">Green Sourcing Team</div>
                <div className="text-sm text-gray-500">Updated January 2026</div>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl mb-4 text-gray-900">Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <a href="#what-is" className="text-green-600 hover:text-green-700 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                What is a Sourcing Agent?
              </a>
              <a href="#benefits" className="text-green-600 hover:text-green-700 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Benefits of Using an Agent
              </a>
              <a href="#selection" className="text-green-600 hover:text-green-700 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                How to Select an Agent
              </a>
              <a href="#costs" className="text-green-600 hover:text-green-700 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Costs and Fee Structures
              </a>
              <a href="#working" className="text-green-600 hover:text-green-700 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Working Together Effectively
              </a>
              <a href="#red-flags" className="text-green-600 hover:text-green-700 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Red Flags to Avoid
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <div className="prose prose-lg max-w-none">
              
              <section id="what-is">
                <h2 className="text-3xl mb-6 text-gray-900 border-b border-gray-200 pb-3">What is a Sourcing Agent?</h2>
                
                <p className="text-gray-700 mb-4">
                  A sourcing agent is your professional representative in China who helps you find manufacturers, negotiate prices, ensure quality, and manage the entire procurement process. Think of them as your local business partner who bridges the gap between you and Chinese suppliers.
                </p>

                <h3 className="text-2xl mt-8 mb-4 text-gray-900">Core Responsibilities</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg mb-3 text-gray-900 flex items-center gap-2">
                      <Target className="w-5 h-5 text-green-600" />
                      Supplier Identification
                    </h4>
                    <ul className="space-y-2 mb-0">
                      <li className="text-gray-700">Research and identify suitable manufacturers</li>
                      <li className="text-gray-700">Verify factory credentials and capabilities</li>
                      <li className="text-gray-700">Conduct factory audits and assessments</li>
                      <li className="text-gray-700">Evaluate production capacity</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg mb-3 text-gray-900 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-blue-600" />
                      Negotiation & Pricing
                    </h4>
                    <ul className="space-y-2 mb-0">
                      <li className="text-gray-700">Negotiate best prices and terms</li>
                      <li className="text-gray-700">Compare quotes from multiple suppliers</li>
                      <li className="text-gray-700">Ensure transparent pricing</li>
                      <li className="text-gray-700">Manage payment terms</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="text-lg mb-3 text-gray-900 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                      Quality Control
                    </h4>
                    <ul className="space-y-2 mb-0">
                      <li className="text-gray-700">Pre-production inspections</li>
                      <li className="text-gray-700">During production monitoring</li>
                      <li className="text-gray-700">Pre-shipment quality checks</li>
                      <li className="text-gray-700">Issue resolution and claims</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="text-lg mb-3 text-gray-900 flex items-center gap-2">
                      <Users className="w-5 h-5 text-orange-600" />
                      Communication & Coordination
                    </h4>
                    <ul className="space-y-2 mb-0">
                      <li className="text-gray-700">Bridge language and cultural barriers</li>
                      <li className="text-gray-700">Manage supplier relationships</li>
                      <li className="text-gray-700">Coordinate logistics and shipping</li>
                      <li className="text-gray-700">Handle documentation</li>
                    </ul>
                  </div>
                </div>
              </section>

              <div className="my-8 rounded-xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1695313486179-9ce53c747413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwbGllciUyMHJlbGF0aW9uc2hpcCUyMG1hbmFnZW1lbnR8ZW58MXx8fHwxNzY5NTE5MDYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Supplier Relationship"
                  className="w-full h-64 object-cover"
                />
              </div>

              <section id="benefits">
                <h2 className="text-3xl mb-6 text-gray-900 border-b border-gray-200 pb-3 mt-12">Benefits of Using a Sourcing Agent</h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-green-600 pl-6">
                    <h3 className="text-2xl mb-3 text-gray-900">Cost Savings</h3>
                    <p className="text-gray-700 mb-2">
                      While agents charge fees, they often save you more through:
                    </p>
                    <ul className="space-y-2">
                      <li className="text-gray-700"><strong>Better Pricing:</strong> Local negotiation expertise and supplier relationships yield 10-30% lower prices</li>
                      <li className="text-gray-700"><strong>Avoid Costly Mistakes:</strong> Prevent quality issues, shipping errors, and compliance problems</li>
                      <li className="text-gray-700"><strong>Reduced MOQ:</strong> Agents can often negotiate lower minimum order quantities</li>
                      <li className="text-gray-700"><strong>Consolidated Shipping:</strong> Combine orders from multiple suppliers to save on freight</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-600 pl-6">
                    <h3 className="text-2xl mb-3 text-gray-900">Time Efficiency</h3>
                    <p className="text-gray-700 mb-2">
                      Sourcing agents accelerate your timeline significantly:
                    </p>
                    <ul className="space-y-2">
                      <li className="text-gray-700"><strong>Faster Supplier Identification:</strong> Leverage existing networks instead of starting from scratch</li>
                      <li className="text-gray-700"><strong>Quick Response:</strong> Operate in local timezone for immediate communication</li>
                      <li className="text-gray-700"><strong>Streamlined Process:</strong> Handle multiple tasks simultaneously</li>
                      <li className="text-gray-700"><strong>Problem Resolution:</strong> Address issues immediately before they escalate</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-600 pl-6">
                    <h3 className="text-2xl mb-3 text-gray-900">Risk Mitigation</h3>
                    <p className="text-gray-700 mb-2">
                      Professional agents help you avoid common pitfalls:
                    </p>
                    <ul className="space-y-2">
                      <li className="text-gray-700"><strong>Supplier Verification:</strong> Background checks and factory audits prevent fraud</li>
                      <li className="text-gray-700"><strong>Quality Assurance:</strong> On-site inspections catch defects before shipping</li>
                      <li className="text-gray-700"><strong>Compliance Knowledge:</strong> Ensure products meet import regulations</li>
                      <li className="text-gray-700"><strong>Contract Protection:</strong> Proper agreements protect your interests</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-600 pl-6">
                    <h3 className="text-2xl mb-3 text-gray-900">Local Expertise</h3>
                    <p className="text-gray-700 mb-2">
                      Benefit from deep market knowledge:
                    </p>
                    <ul className="space-y-2">
                      <li className="text-gray-700"><strong>Cultural Understanding:</strong> Navigate Chinese business culture effectively</li>
                      <li className="text-gray-700"><strong>Language Skills:</strong> Clear communication prevents misunderstandings</li>
                      <li className="text-gray-700"><strong>Market Intelligence:</strong> Access to industry trends and pricing benchmarks</li>
                      <li className="text-gray-700"><strong>Regulatory Knowledge:</strong> Stay current with changing regulations</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="selection">
                <h2 className="text-3xl mb-6 text-gray-900 border-b border-gray-200 pb-3 mt-12">How to Select a Sourcing Agent</h2>
                
                <p className="text-gray-700 mb-6">
                  Choosing the right sourcing agent is crucial for your success. Follow this systematic approach:
                </p>

                <h3 className="text-2xl mt-8 mb-4 text-gray-900">Step 1: Define Your Requirements</h3>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <p className="text-gray-700 mb-3">Before searching, clarify what you need:</p>
                  <ul className="space-y-2">
                    <li className="text-gray-700">Product categories and specifications</li>
                    <li className="text-gray-700">Order quantities and frequency</li>
                    <li className="text-gray-700">Budget and target pricing</li>
                    <li className="text-gray-700">Quality standards and certifications needed</li>
                    <li className="text-gray-700">Timeline and delivery requirements</li>
                  </ul>
                </div>

                <h3 className="text-2xl mt-8 mb-4 text-gray-900">Step 2: Research Potential Agents</h3>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <p className="text-gray-700 mb-3">Find candidates through multiple channels:</p>
                  <ul className="space-y-2">
                    <li className="text-gray-700"><strong>Online Research:</strong> Search for agents specializing in your product category</li>
                    <li className="text-gray-700"><strong>Referrals:</strong> Ask for recommendations from other businesses</li>
                    <li className="text-gray-700"><strong>Trade Shows:</strong> Meet agents at industry events</li>
                    <li className="text-gray-700"><strong>LinkedIn:</strong> Check professional profiles and connections</li>
                    <li className="text-gray-700"><strong>Industry Associations:</strong> Consult trade organizations</li>
                  </ul>
                </div>

                <h3 className="text-2xl mt-8 mb-4 text-gray-900">Step 3: Evaluate Experience</h3>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <p className="text-gray-700 mb-3">Assess their qualifications:</p>
                  <ul className="space-y-2">
                    <li className="text-gray-700"><strong>Years in Business:</strong> Look for at least 3-5 years of experience</li>
                    <li className="text-gray-700"><strong>Product Expertise:</strong> Verify experience with your specific products</li>
                    <li className="text-gray-700"><strong>Client Portfolio:</strong> Review past and current clients</li>
                    <li className="text-gray-700"><strong>Success Stories:</strong> Ask for case studies and testimonials</li>
                    <li className="text-gray-700"><strong>Market Knowledge:</strong> Test their understanding of your target market</li>
                  </ul>
                </div>

                <h3 className="text-2xl mt-8 mb-4 text-gray-900">Step 4: Verify Credentials</h3>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <p className="text-gray-700 mb-3">Conduct due diligence:</p>
                  <ul className="space-y-2">
                    <li className="text-gray-700"><strong>Business License:</strong> Verify legal registration in China</li>
                    <li className="text-gray-700"><strong>Physical Office:</strong> Confirm they have an actual office, not just virtual</li>
                    <li className="text-gray-700"><strong>References:</strong> Contact current and past clients</li>
                    <li className="text-gray-700"><strong>Online Presence:</strong> Check website, social media, and reviews</li>
                    <li className="text-gray-700"><strong>Insurance:</strong> Confirm they carry liability insurance</li>
                  </ul>
                </div>

                <h3 className="text-2xl mt-8 mb-4 text-gray-900">Step 5: Interview Candidates</h3>
                <div className="bg-green-50 p-6 rounded-lg mb-6">
                  <p className="text-gray-700 mb-3"><strong>Essential Questions to Ask:</strong></p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-900 mb-1"><strong>About Their Business:</strong></p>
                      <ul className="space-y-1 text-sm">
                        <li className="text-gray-700">• How long have you been in business?</li>
                        <li className="text-gray-700">• How many clients do you currently serve?</li>
                        <li className="text-gray-700">• What is your team size and structure?</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-gray-900 mb-1"><strong>About Their Capabilities:</strong></p>
                      <ul className="space-y-1 text-sm">
                        <li className="text-gray-700">• What experience do you have with my product category?</li>
                        <li className="text-gray-700">• How do you verify and audit suppliers?</li>
                        <li className="text-gray-700">• What quality control procedures do you follow?</li>
                        <li className="text-gray-700">• Can you handle the full process from sourcing to shipping?</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-gray-900 mb-1"><strong>About Working Together:</strong></p>
                      <ul className="space-y-1 text-sm">
                        <li className="text-gray-700">• What is your fee structure?</li>
                        <li className="text-gray-700">• How do you communicate and report progress?</li>
                        <li className="text-gray-700">• What happens if quality issues arise?</li>
                        <li className="text-gray-700">• What are your payment terms?</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl mt-8 mb-4 text-gray-900">Step 6: Start with a Test Project</h3>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <p className="text-gray-700 mb-3">Begin with a smaller order to evaluate:</p>
                  <ul className="space-y-2">
                    <li className="text-gray-700">Communication quality and responsiveness</li>
                    <li className="text-gray-700">Attention to detail and thoroughness</li>
                    <li className="text-gray-700">Problem-solving abilities</li>
                    <li className="text-gray-700">Adherence to timelines and commitments</li>
                    <li className="text-gray-700">Quality of deliverables and reports</li>
                  </ul>
                </div>
              </section>

              <section id="costs">
                <h2 className="text-3xl mb-6 text-gray-900 border-b border-gray-200 pb-3 mt-12">Costs and Fee Structures</h2>
                
                <p className="text-gray-700 mb-6">
                  Understanding fee structures helps you budget accurately and compare agents fairly.
                </p>

                <h3 className="text-2xl mt-8 mb-4 text-gray-900">Common Fee Models</h3>

                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg mb-3 text-gray-900">1. Commission-Based (Most Common)</h4>
                    <p className="text-gray-700 mb-2">
                      Agent charges a percentage of order value
                    </p>
                    <ul className="space-y-2 mb-3">
                      <li className="text-gray-700"><strong>Typical Range:</strong> 5-10% of product cost</li>
                      <li className="text-gray-700"><strong>Pros:</strong> No upfront cost, aligned with your success</li>
                      <li className="text-gray-700"><strong>Cons:</strong> Can be expensive for high-value orders</li>
                    </ul>
                    <div className="bg-white p-4 rounded mt-3">
                      <p className="text-gray-900 mb-1"><strong>Example:</strong></p>
                      <p className="text-gray-700 text-sm">$10,000 order × 7% commission = $700 agent fee</p>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg mb-3 text-gray-900">2. Fixed Fee Per Order</h4>
                    <p className="text-gray-700 mb-2">
                      Set amount regardless of order value
                    </p>
                    <ul className="space-y-2 mb-3">
                      <li className="text-gray-700"><strong>Typical Range:</strong> $500-$3,000 per order</li>
                      <li className="text-gray-700"><strong>Pros:</strong> Predictable costs, good for high-value orders</li>
                      <li className="text-gray-700"><strong>Cons:</strong> Upfront payment, may be costly for small orders</li>
                    </ul>
                    <div className="bg-white p-4 rounded mt-3">
                      <p className="text-gray-900 mb-1"><strong>Best For:</strong></p>
                      <p className="text-gray-700 text-sm">Larger orders or ongoing relationships</p>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="text-lg mb-3 text-gray-900">3. Monthly Retainer</h4>
                    <p className="text-gray-700 mb-2">
                      Fixed monthly fee for ongoing services
                    </p>
                    <ul className="space-y-2 mb-3">
                      <li className="text-gray-700"><strong>Typical Range:</strong> $1,000-$5,000 per month</li>
                      <li className="text-gray-700"><strong>Pros:</strong> Dedicated attention, cost-effective for frequent orders</li>
                      <li className="text-gray-700"><strong>Cons:</strong> Ongoing commitment, minimum contract period</li>
                    </ul>
                    <div className="bg-white p-4 rounded mt-3">
                      <p className="text-gray-900 mb-1"><strong>Best For:</strong></p>
                      <p className="text-gray-700 text-sm">Businesses with regular, multiple orders</p>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="text-lg mb-3 text-gray-900">4. Hybrid Model</h4>
                    <p className="text-gray-700 mb-2">
                      Combination of retainer + reduced commission
                    </p>
                    <ul className="space-y-2 mb-3">
                      <li className="text-gray-700"><strong>Example:</strong> $1,500/month + 3% commission</li>
                      <li className="text-gray-700"><strong>Pros:</strong> Balance of commitment and flexibility</li>
                      <li className="text-gray-700"><strong>Cons:</strong> More complex fee structure</li>
                    </ul>
                    <div className="bg-white p-4 rounded mt-3">
                      <p className="text-gray-900 mb-1"><strong>Best For:</strong></p>
                      <p className="text-gray-700 text-sm">Growing businesses with increasing order volume</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl mt-8 mb-4 text-gray-900">Additional Costs to Consider</h3>
                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
                  <p className="text-gray-700 mb-3">
                    <strong>Services typically NOT included in base fee:</strong>
                  </p>
                  <ul className="space-y-2">
                    <li className="text-gray-700">Sample procurement and shipping ($50-200 per sample)</li>
                    <li className="text-gray-700">Product testing and certification (varies by product)</li>
                    <li className="text-gray-700">Photography and product documentation ($100-500)</li>
                    <li className="text-gray-700">Warehousing and storage (if needed)</li>
                    <li className="text-gray-700">Expedited services or rush orders</li>
                    <li className="text-gray-700">Travel expenses for factory visits in remote areas</li>
                  </ul>
                </div>
              </section>

              <section id="working">
                <h2 className="text-3xl mb-6 text-gray-900 border-b border-gray-200 pb-3 mt-12">Working Together Effectively</h2>
                
                <p className="text-gray-700 mb-6">
                  A successful partnership requires clear communication and mutual understanding.
                </p>

                <h3 className="text-2xl mt-8 mb-4 text-gray-900">Best Practices for Collaboration</h3>

                <div className="space-y-6">
                  <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                    <h4 className="text-lg mb-2 text-gray-900">Provide Detailed Specifications</h4>
                    <p className="text-gray-700 mb-2">
                      The more detail you provide, the better results you'll get:
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li className="text-gray-700">• Technical drawings and dimensions</li>
                      <li className="text-gray-700">• Material specifications and grades</li>
                      <li className="text-gray-700">• Color codes (Pantone, RAL, etc.)</li>
                      <li className="text-gray-700">• Packaging requirements</li>
                      <li className="text-gray-700">• Quality standards and acceptable defect rates</li>
                      <li className="text-gray-700">• Regulatory requirements and certifications</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                    <h4 className="text-lg mb-2 text-gray-900">Establish Communication Protocols</h4>
                    <p className="text-gray-700 mb-2">
                      Set clear expectations for communication:
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li className="text-gray-700">• Preferred communication channels (email, WhatsApp, WeChat)</li>
                      <li className="text-gray-700">• Response time expectations</li>
                      <li className="text-gray-700">• Regular update schedule (weekly, bi-weekly)</li>
                      <li className="text-gray-700">• Escalation procedures for urgent issues</li>
                      <li className="text-gray-700">• Documentation and reporting requirements</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                    <h4 className="text-lg mb-2 text-gray-900">Set Realistic Expectations</h4>
                    <p className="text-gray-700 mb-2">
                      Understand typical timelines and limitations:
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li className="text-gray-700">• Supplier identification: 1-2 weeks</li>
                      <li className="text-gray-700">• Sample development: 2-4 weeks</li>
                      <li className="text-gray-700">• Production: 30-60 days (varies by product)</li>
                      <li className="text-gray-700">• Shipping: 15-45 days (sea freight)</li>
                      <li className="text-gray-700">• Rush orders cost more and may compromise quality</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                    <h4 className="text-lg mb-2 text-gray-900">Build Long-term Relationships</h4>
                    <p className="text-gray-700 mb-2">
                      Invest in the partnership for mutual benefit:
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li className="text-gray-700">• Share your business goals and plans</li>
                      <li className="text-gray-700">• Provide feedback on performance</li>
                      <li className="text-gray-700">• Be fair and reasonable in negotiations</li>
                      <li className="text-gray-700">• Pay on time according to agreed terms</li>
                      <li className="text-gray-700">• Consider volume commitments for better pricing</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="red-flags">
                <h2 className="text-3xl mb-6 text-gray-900 border-b border-gray-200 pb-3 mt-12">Red Flags to Avoid</h2>
                
                <p className="text-gray-700 mb-6">
                  Watch out for these warning signs when selecting a sourcing agent:
                </p>

                <div className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-lg mb-2 text-gray-900">Unrealistic Promises</h4>
                        <p className="text-gray-700 mb-0">
                          Be wary of agents promising impossibly low prices, ultra-fast delivery, or guaranteeing  outcomes they can't control. Quality sourcing takes time and expertise.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-lg mb-2 text-gray-900">Lack of Transparency</h4>
                        <p className="text-gray-700 mb-2">
                          Avoid agents who are secretive about:
                        </p>
                        <ul className="space-y-1 text-sm">
                          <li className="text-gray-700">• Supplier identities and factory locations</li>
                          <li className="text-gray-700">• Detailed pricing breakdowns</li>
                          <li className="text-gray-700">• Production processes and timelines</li>
                          <li className="text-gray-700">• Quality issues or problems</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-lg mb-2 text-gray-900">No Physical Presence</h4>
                        <p className="text-gray-700 mb-0">
                          Agents must have an actual office in China and be able to visit factories in person. Virtual-only agents cannot provide proper quality control or handle issues effectively.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-lg mb-2 text-gray-900">Pressure Tactics</h4>
                        <p className="text-gray-700 mb-0">
                          Professional agents don't pressure you into quick decisions or require large upfront payments. Take your time to evaluate options and ask questions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-lg mb-2 text-gray-900">Poor Communication</h4>
                        <p className="text-gray-700 mb-2">
                          Warning signs include:
                        </p>
                        <ul className="space-y-1 text-sm">
                          <li className="text-gray-700">• Slow or inconsistent responses</li>
                          <li className="text-gray-700">• Vague or unclear answers</li>
                          <li className="text-gray-700">• Poor language skills making communication difficult</li>
                          <li className="text-gray-700">• Unavailable during critical times</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-lg mb-2 text-gray-900">No Verifiable References</h4>
                        <p className="text-gray-700 mb-0">
                          Cannot provide client references, testimonials, or case studies. Be especially cautious if references seem fake or staged.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="bg-gradient-to-br from-green-600 to-blue-600 text-white p-8 rounded-xl mt-12">
                <h3 className="text-2xl mb-4">Partner with Experienced Professionals</h3>
                <p className="mb-6">
                  At Green Sourcing, we bring over 10 years of China sourcing expertise to help your business succeed. Our transparent processes, proven track record, and commitment to quality make us the ideal sourcing partner.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="text-3xl mb-1">10+</div>
                    <div className="text-sm">Years Experience</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="text-3xl mb-1">300+</div>
                    <div className="text-sm">Happy Clients</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="text-3xl mb-1">98%</div>
                    <div className="text-sm">Quality Pass Rate</div>
                  </div>
                </div>
                <Link to="/contact">
                  <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg transition-colors">
                    Start Your Sourcing Journey
                  </button>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
