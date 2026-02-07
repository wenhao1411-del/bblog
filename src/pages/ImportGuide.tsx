import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft, Download, CheckCircle, AlertTriangle, FileText, Ship } from 'lucide-react';

export function ImportGuide() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1713859326033-f75e04439c3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbXBvcnQlMjBleHBvcnQlMjBjdXN0b21zJTIwY2xlYXJhbmNlfGVufDF8fHx8MTc2OTUxOTA1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Import and Export"
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

            <h1 className="text-4xl md:text-5xl mb-6 text-gray-900">Complete Import Guide</h1>
            <p className="text-xl text-gray-600 mb-6">
              Everything you need to know about importing products from China - from documentation to customs clearance
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
              <a href="#overview" className="text-green-600 hover:text-green-700 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Import Overview
              </a>
              <a href="#documentation" className="text-green-600 hover:text-green-700 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Required Documentation
              </a>
              <a href="#customs" className="text-green-600 hover:text-green-700 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Customs Clearance Process
              </a>
              <a href="#regulations" className="text-green-600 hover:text-green-700 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Compliance & Regulations
              </a>
              <a href="#costs" className="text-green-600 hover:text-green-700 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Import Costs & Duties
              </a>
              <a href="#tips" className="text-green-600 hover:text-green-700 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Tips for Success
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <div className="prose prose-lg max-w-none">
              
              <section id="overview">
                <h2 className="text-3xl mb-6 text-gray-900 border-b border-gray-200 pb-3">Import Overview</h2>
                
                <p className="text-gray-700 mb-4">
                  Importing products from China has become an essential strategy for businesses worldwide. China's manufacturing capabilities, competitive pricing, and vast product range make it an attractive sourcing destination. However, successful importing requires understanding the process, regulations, and best practices.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg mb-2 text-gray-900">Important Note</h4>
                      <p className="text-gray-700 mb-0">
                        Import regulations vary by country and product category. Always consult with a customs broker or import specialist for your specific situation. This guide provides general information applicable to most countries.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl mt-8 mb-4 text-gray-900">Key Steps in the Import Process</h3>
                <ol className="space-y-3 mb-6">
                  <li className="text-gray-700"><strong>Product Research:</strong> Identify products and verify they can be legally imported</li>
                  <li className="text-gray-700"><strong>Supplier Selection:</strong> Find and verify reliable manufacturers</li>
                  <li className="text-gray-700"><strong>Negotiate Terms:</strong> Agree on pricing, payment terms, and delivery schedule</li>
                  <li className="text-gray-700"><strong>Quality Control:</strong> Inspect products before shipment</li>
                  <li className="text-gray-700"><strong>Shipping Arrangement:</strong> Coordinate logistics and freight forwarding</li>
                  <li className="text-gray-700"><strong>Documentation:</strong> Prepare all required import documents</li>
                  <li className="text-gray-700"><strong>Customs Clearance:</strong> Clear goods through customs in your country</li>
                  <li className="text-gray-700"><strong>Final Delivery:</strong> Receive products at your destination</li>
                </ol>
              </section>

              <div className="my-8 rounded-xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1642292133205-0059abb41c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkZSUyMHJlZ3VsYXRpb25zJTIwY29tcGxpYW5jZXxlbnwxfHx8fDE3Njk1MTkwNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Trade Regulations"
                  className="w-full h-64 object-cover"
                />
              </div>

              <section id="documentation">
                <h2 className="text-3xl mb-6 text-gray-900 border-b border-gray-200 pb-3 mt-12">Required Documentation</h2>
                
                <p className="text-gray-700 mb-6">
                  Proper documentation is critical for smooth customs clearance. Missing or incorrect documents can cause significant delays and additional costs.
                </p>

                <h3 className="text-2xl mt-8 mb-4 text-gray-900">Essential Documents</h3>

                <div className="space-y-6">
                  <div className="border-l-4 border-green-600 pl-6">
                    <h4 className="text-lg mb-2 text-gray-900 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-green-600" />
                      Commercial Invoice
                    </h4>
                    <p className="text-gray-700 mb-2">
                      The most important document, issued by the supplier. Must include:
                    </p>
                    <ul className="space-y-1 mb-0">
                      <li className="text-gray-700">Complete seller and buyer information</li>
                      <li className="text-gray-700">Detailed product descriptions</li>
                      <li className="text-gray-700">Quantity and unit prices</li>
                      <li className="text-gray-700">Total value and currency</li>
                      <li className="text-gray-700">Payment terms and method</li>
                      <li className="text-gray-700">Shipping terms (Incoterms)</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-600 pl-6">
                    <h4 className="text-lg mb-2 text-gray-900 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-green-600" />
                      Packing List
                    </h4>
                    <p className="text-gray-700 mb-2">
                      Detailed inventory of shipment contents including:
                    </p>
                    <ul className="space-y-1 mb-0">
                      <li className="text-gray-700">Item descriptions and SKU codes</li>
                      <li className="text-gray-700">Quantities per carton</li>
                      <li className="text-gray-700">Dimensions and weight of each package</li>
                      <li className="text-gray-700">Total gross and net weight</li>
                      <li className="text-gray-700">Carton markings and numbers</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-600 pl-6">
                    <h4 className="text-lg mb-2 text-gray-900 flex items-center gap-2">
                      <Ship className="w-5 h-5 text-green-600" />
                      Bill of Lading (B/L)
                    </h4>
                    <p className="text-gray-700 mb-2">
                      Issued by the shipping carrier, serves as:
                    </p>
                    <ul className="space-y-1 mb-0">
                      <li className="text-gray-700">Receipt of goods by the carrier</li>
                      <li className="text-gray-700">Contract of carriage</li>
                      <li className="text-gray-700">Document of title to the goods</li>
                      <li className="text-gray-700">Required for customs clearance and cargo release</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-600 pl-6">
                    <h4 className="text-lg mb-2 text-gray-900 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-green-600" />
                      Certificate of Origin (CO)
                    </h4>
                    <p className="text-gray-700 mb-2">
                      Certifies the country where products were manufactured. Required for:
                    </p>
                    <ul className="space-y-1 mb-0">
                      <li className="text-gray-700">Determining applicable tariffs and duties</li>
                      <li className="text-gray-700">Trade agreement benefits</li>
                      <li className="text-gray-700">Compliance with import restrictions</li>
                      <li className="text-gray-700">Types: General CO, Form A (GSP), Form E (ASEAN), etc.</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl mt-8 mb-4 text-gray-900">Product-Specific Documents</h3>
                <p className="text-gray-700 mb-4">
                  Depending on your product category, additional certifications may be required:
                </p>
                <ul className="space-y-2">
                  <li className="text-gray-700"><strong>FDA Registration:</strong> Food, cosmetics, medical devices (USA)</li>
                  <li className="text-gray-700"><strong>CE Marking:</strong> Electronics and machinery (EU)</li>
                  <li className="text-gray-700"><strong>FCC Certificate:</strong> Electronic devices with radio frequencies (USA)</li>
                  <li className="text-gray-700"><strong>Safety Certifications:</strong> UL, CSA, TUV for specific products</li>
                  <li className="text-gray-700"><strong>Phytosanitary Certificate:</strong> Wood products and agricultural items</li>
                  <li className="text-gray-700"><strong>Material Safety Data Sheet (MSDS):</strong> Chemicals and hazardous materials</li>
                </ul>
              </section>

              <section id="customs">
                <h2 className="text-3xl mb-6 text-gray-900 border-b border-gray-200 pb-3 mt-12">Customs Clearance Process</h2>
                
                <p className="text-gray-700 mb-6">
                  Understanding the customs clearance process helps avoid delays and ensures smooth import operations.
                </p>

                <h3 className="text-2xl mt-8 mb-4 text-gray-900">Step-by-Step Clearance</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0">1</div>
                      <div className="flex-1">
                        <h4 className="text-lg mb-2 text-gray-900">Entry Filing</h4>
                        <p className="text-gray-700 mb-0">
                          Your customs broker files entry documents with customs authorities, typically within 15 days of cargo arrival. This includes customs declaration forms and all supporting documents.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0">2</div>
                      <div className="flex-1">
                        <h4 className="text-lg mb-2 text-gray-900">Document Review</h4>
                        <p className="text-gray-700 mb-0">
                          Customs officers review documentation for completeness and accuracy. They verify product descriptions, values, and classifications against submitted documents.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0">3</div>
                      <div className="flex-1">
                        <h4 className="text-lg mb-2 text-gray-900">Duty Assessment</h4>
                        <p className="text-gray-700 mb-0">
                          Customs calculates applicable duties and taxes based on HS codes, product value, and country of origin. This includes import duties, VAT, and any special taxes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0">4</div>
                      <div className="flex-1">
                        <h4 className="text-lg mb-2 text-gray-900">Physical Inspection (if required)</h4>
                        <p className="text-gray-700 mb-0">
                          Customs may select your shipment for physical inspection based on random selection or risk assessment. This can add 1-5 days to clearance time.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0">5</div>
                      <div className="flex-1">
                        <h4 className="text-lg mb-2 text-gray-900">Payment and Release</h4>
                        <p className="text-gray-700 mb-0">
                          After payment of all duties and taxes, customs releases the cargo. Your freight forwarder arranges final delivery to your specified destination.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg mb-2 text-gray-900">Common Customs Delays</h4>
                      <ul className="space-y-1 mb-0">
                        <li className="text-gray-700">Incomplete or inaccurate documentation</li>
                        <li className="text-gray-700">Incorrect HS code classification</li>
                        <li className="text-gray-700">Undervalued goods</li>
                        <li className="text-gray-700">Missing product certifications</li>
                        <li className="text-gray-700">Restricted or prohibited items</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="regulations">
                <h2 className="text-3xl mb-6 text-gray-900 border-b border-gray-200 pb-3 mt-12">Compliance & Regulations</h2>
                
                <p className="text-gray-700 mb-6">
                  Compliance with import regulations protects your business from penalties and ensures smooth operations.
                </p>

                <h3 className="text-2xl mt-8 mb-4 text-gray-900">Key Compliance Areas</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg mb-3 text-gray-900">Product Safety Standards</h4>
                    <p className="text-gray-700 mb-2">
                      Products must meet safety standards in your destination country:
                    </p>
                    <ul className="space-y-2">
                      <li className="text-gray-700"><strong>Consumer Products:</strong> Lead content, small parts, flammability standards</li>
                      <li className="text-gray-700"><strong>Electronics:</strong> Electrical safety, EMC compliance, energy efficiency</li>
                      <li className="text-gray-700"><strong>Textiles:</strong> Flammability, chemical restrictions (e.g., azo dyes)</li>
                      <li className="text-gray-700"><strong>Food Contact:</strong> FDA-approved materials and testing</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg mb-3 text-gray-900">Intellectual Property</h4>
                    <p className="text-gray-700 mb-2">
                      Customs actively enforces IP rights. Ensure your products:
                    </p>
                    <ul className="space-y-2">
                      <li className="text-gray-700">Don't infringe on trademarks or patents</li>
                      <li className="text-gray-700">Have proper licensing for branded products</li>
                      <li className="text-gray-700">Comply with copyright laws</li>
                      <li className="text-gray-700">Avoid counterfeit components</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg mb-3 text-gray-900">Environmental Regulations</h4>
                    <p className="text-gray-700 mb-2">
                      Growing focus on environmental compliance includes:
                    </p>
                    <ul className="space-y-2">
                      <li className="text-gray-700"><strong>RoHS:</strong> Restriction of hazardous substances in electronics</li>
                      <li className="text-gray-700"><strong>REACH:</strong> Chemical regulations in EU</li>
                      <li className="text-gray-700"><strong>Packaging:</strong> Recycling requirements and material restrictions</li>
                      <li className="text-gray-700"><strong>Energy Efficiency:</strong> Minimum performance standards</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="costs">
                <h2 className="text-3xl mb-6 text-gray-900 border-b border-gray-200 pb-3 mt-12">Import Costs & Duties</h2>
                
                <p className="text-gray-700 mb-6">
                  Understanding all costs involved helps you price products accurately and avoid surprises.
                </p>

                <h3 className="text-2xl mt-8 mb-4 text-gray-900">Cost Components</h3>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg mb-3 text-gray-900">Product Costs</h4>
                      <ul className="space-y-2">
                        <li className="text-gray-700">Unit price from supplier</li>
                        <li className="text-gray-700">Packaging materials</li>
                        <li className="text-gray-700">Product testing and certification</li>
                        <li className="text-gray-700">Quality inspection fees</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg mb-3 text-gray-900">Shipping Costs</h4>
                      <ul className="space-y-2">
                        <li className="text-gray-700">International freight (sea/air)</li>
                        <li className="text-gray-700">Domestic shipping in China</li>
                        <li className="text-gray-700">Insurance</li>
                        <li className="text-gray-700">Warehouse handling fees</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg mb-3 text-gray-900">Customs Charges</h4>
                      <ul className="space-y-2">
                        <li className="text-gray-700">Import duties (varies by HS code)</li>
                        <li className="text-gray-700">VAT or sales tax</li>
                        <li className="text-gray-700">Customs broker fees</li>
                        <li className="text-gray-700">Document processing fees</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg mb-3 text-gray-900">Additional Costs</h4>
                      <ul className="space-y-2">
                        <li className="text-gray-700">Port charges and terminal handling</li>
                        <li className="text-gray-700">Storage fees (if applicable)</li>
                        <li className="text-gray-700">Final mile delivery</li>
                        <li className="text-gray-700">Currency exchange fees</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl mt-8 mb-4 text-gray-900">Calculating Import Duties</h3>
                <p className="text-gray-700 mb-4">
                  Import duty calculation formula:
                </p>
                <div className="bg-green-50 p-6 rounded-lg mb-4">
                  <p className="text-gray-900 mb-2">
                    <strong>Duty Amount = Customs Value × Duty Rate</strong>
                  </p>
                  <p className="text-gray-700 text-sm mb-0">
                    Customs Value typically includes product cost + shipping + insurance (CIF value)
                  </p>
                </div>
                <p className="text-gray-700 mb-4">
                  Duty rates vary by:
                </p>
                <ul className="space-y-2">
                  <li className="text-gray-700">Product type (HS code classification)</li>
                  <li className="text-gray-700">Country of origin</li>
                  <li className="text-gray-700">Trade agreements in effect</li>
                  <li className="text-gray-700">Product value (de minimis thresholds)</li>
                </ul>
              </section>

              <section id="tips">
                <h2 className="text-3xl mb-6 text-gray-900 border-b border-gray-200 pb-3 mt-12">Tips for Import Success</h2>
                
                <div className="space-y-6">
                  <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                    <h4 className="text-lg mb-2 text-gray-900 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Work with Experienced Partners
                    </h4>
                    <p className="text-gray-700 mb-0">
                      Partner with experienced sourcing agents, freight forwarders, and customs brokers. Their expertise saves time and prevents costly mistakes.
                    </p>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                    <h4 className="text-lg mb-2 text-gray-900 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Verify Product Classification
                    </h4>
                    <p className="text-gray-700 mb-0">
                      Correct HS code classification is crucial. Misclassification can result in incorrect duties, customs delays, or penalties. Get expert help if uncertain.
                    </p>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                    <h4 className="text-lg mb-2 text-gray-900 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Maintain Accurate Records
                    </h4>
                    <p className="text-gray-700 mb-0">
                      Keep detailed records of all transactions, communications, and documents. Customs may audit imports up to 5 years after entry.
                    </p>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                    <h4 className="text-lg mb-2 text-gray-900 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Plan for Lead Times
                    </h4>
                    <p className="text-gray-700 mb-0">
                      Factor in production time (30-60 days), shipping (15-45 days by sea), and customs clearance (2-7 days) when planning inventory.
                    </p>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                    <h4 className="text-lg mb-2 text-gray-900 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Implement Quality Control
                    </h4>
                    <p className="text-gray-700 mb-0">
                      Invest in pre-shipment inspection. Finding problems in China is much cheaper than dealing with defective goods after import.
                    </p>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                    <h4 className="text-lg mb-2 text-gray-900 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Understand Payment Terms
                    </h4>
                    <p className="text-gray-700 mb-0">
                      Common terms are 30% deposit, 70% before shipment. Consider using letters of credit or trade insurance for large orders or new suppliers.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-600 to-blue-600 text-white p-8 rounded-xl mt-8">
                  <h3 className="text-2xl mb-4">Need Import Assistance?</h3>
                  <p className="mb-6">
                    Our team handles all aspects of importing from China, including documentation, compliance, and customs clearance. We ensure your products arrive on time and without complications.
                  </p>
                  <Link to="/contact">
                    <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg transition-colors">
                      Get Expert Help
                    </button>
                  </Link>
                </div>
              </section>

            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
