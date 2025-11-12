import { AlertTriangle, Ban, CheckCircle, Link, Users } from "lucide-react";
import ScrollReveal from "../../utils/ScrollReveal";


export default function SafetyGuidelinesSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 text-pink-600">
              <AlertTriangle className="w-6 h-6" />
              <span className="uppercase tracking-wider">
                Safety Guidelines
              </span>
            </div>
            <h2 className="mb-6">Best Practices for Safe Sessions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these guidelines to ensure the best and safest experience
              on Heleno.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal delay={0.1}>
            <div className="p-8 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl border border-pink-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="mb-0">For Users</h4>
              </div>
              <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span>Always meet in public, well-lit locations for in-person sessions</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span>Share your session details with a trusted friend or family member</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span>Keep the app open during sessions for quick access to SOS</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span>Trust your instincts - if something feels wrong, end the session</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span>Report any inappropriate behavior immediately to our team</span>
                  </li>
              </ul>
            </div>
          </ScrollReveal>


          <ScrollReveal delay={0.2}>
            <div className="p-8 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl border border-pink-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Link className="w-6 h-6 text-white" />
                </div>
                <h4 className="mb-0">For Lynkers</h4>
              </div>
              <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span>Complete all verification steps and keep your profile updated</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span>Maintain professional boundaries and respectful communication</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span>Arrive on time and honor all session commitments</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span>Never share personal contact information outside the platform</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span>Report any concerning user behavior to protect the community</span>
                  </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 p-8 bg-gradient-to-r from-pink-100 via-purple-100 to-pink-100 rounded-3xl text-center">
            <h3 className="mb-4 text-2xl text-pink-600">Zero Tolerance Policy</h3>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">
              We maintain a strict zero-tolerance policy for harassment,
              inappropriate behavior, or any violation of our community
              guidelines. Violations result in immediate account suspension and
              potential legal action.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full">
                <Ban className="w-5 h-5 text-pink-800" />
                <span className="text-sm font-medium">No Harassment</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full">
                <Ban className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium">
                  No Inappropriate Content
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full">
                <Ban className="w-5 h-5 text-pink-600" />
                <span className="text-sm font-medium">
                  No Fraudulent Activity
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
