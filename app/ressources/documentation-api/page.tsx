'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function APIDocumentationPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [copiedRequest, setCopiedRequest] = useState(false);
    const [copiedResponse, setCopiedResponse] = useState(false);

    const handleCopyRequest = () => {
        const requestCode = `curl https://api.paynala.com/v1/payments \\
  -u sk_test_...: \\
  -d amount=2000 \\
  -d currency="ngn" \\
  -d customer_email="customer@example.com"`;
        navigator.clipboard.writeText(requestCode);
        setCopiedRequest(true);
        setTimeout(() => setCopiedRequest(false), 2000);
    };

    const handleCopyResponse = () => {
        const responseCode = `{
  "id": "pm_1J...xX",
  "object": "payment",
  "amount": 2000,
  "currency": "ngn",
  "status": "succeeded",
  ...
}`;
        navigator.clipboard.writeText(responseCode);
        setCopiedResponse(true);
        setTimeout(() => setCopiedResponse(false), 2000);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar Navigation */}
            <aside className="w-64 bg-white border-r border-gray-200 fixed h-screen overflow-y-auto">
                {/* Logo */}
                <div className="p-6 border-b border-gray-200">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-red-600 rounded"></div>
                        <span className="text-xl font-bold text-gray-900">Paynala</span>
                    </Link>
                </div>

                {/* Search */}
                <div className="p-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search documentation..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                        <svg
                            className="absolute left-3 top-2.5 w-4 h-4 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                {/* Navigation Menu */}
                <nav className="px-4 py-2">
                    {/* Getting Started */}
                    <div className="mb-4">
                        <button className="flex items-center w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                            </svg>
                            Getting Started
                        </button>
                    </div>

                    {/* Core Concepts */}
                    <div className="mb-4">
                        <button className="flex items-center w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                            </svg>
                            Core Concepts
                        </button>
                    </div>

                    {/* API Reference */}
                    <div className="mb-4">
                        <button className="flex items-center w-full text-left px-3 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                            </svg>
                            API Reference
                        </button>
                        <ul className="ml-6 mt-2 space-y-1">
                            <li>
                                <Link href="#" className="block px-3 py-1.5 text-sm text-red-600 font-medium hover:bg-red-50 rounded">
                                    Payments
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="block px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded">
                                    Customers
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="block px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded">
                                    Transfers
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="block px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded">
                                    Webhooks
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* SDKs & Libraries */}
                    <div className="mb-4">
                        <button className="flex items-center w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            SDKs & Libraries
                        </button>
                    </div>

                    {/* Guides */}
                    <div className="mb-4">
                        <button className="flex items-center w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                            </svg>
                            Guides
                        </button>
                    </div>

                    {/* Changelog */}
                    <div className="mb-4">
                        <button className="flex items-center w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                            </svg>
                            Changelog
                        </button>
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="ml-64 flex-1">
                {/* Top Navigation Bar */}
                <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
                    <div className="px-8 py-4 flex items-center justify-between">
                        <nav className="flex items-center space-x-4 text-sm text-gray-600">
                            <Link href="/developers" className="hover:text-gray-900">Developers</Link>
                            <span>/</span>
                            <Link href="/api-reference" className="hover:text-gray-900">API Reference</Link>
                            <span>/</span>
                            <span className="text-gray-900 font-medium">Payments</span>
                        </nav>
                        <div className="flex items-center space-x-4">
                            <Link
                                href="/pricing"
                                className="text-sm text-gray-700 hover:text-gray-900"
                            >
                                Pricing
                            </Link>
                            <Link
                                href="/company"
                                className="text-sm text-gray-700 hover:text-gray-900"
                            >
                                Company
                            </Link>
                            <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 text-sm font-medium">
                                Get API Keys
                            </button>
                            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 text-sm font-medium">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="px-8 py-12 max-w-5xl">
                    {/* Title */}
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">
                        Create a Payment
                    </h1>
                    <p className="text-lg text-red-600 mb-12">
                        This endpoint creates a new payment object.
                    </p>

                    {/* Endpoint */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Endpoint
                        </h2>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
                            <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded mr-3">
                                POST
                            </span>
                            <code className="text-gray-800 font-mono text-sm">
                                /v1/payments
                            </code>
                        </div>
                    </section>

                    {/* Request Parameters */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Request Parameters
                        </h2>
                        <div className="overflow-hidden rounded-lg border border-gray-200">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-red-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-red-800 uppercase tracking-wider">
                                        Parameter
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-red-800 uppercase tracking-wider">
                                        Type
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-red-800 uppercase tracking-wider">
                                        Description
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                <tr className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <code className="text-sm font-mono text-gray-900">
                                            amount<span className="text-red-600">*</span>
                                        </code>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="text-sm text-purple-600 font-mono">integer</span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        The amount to charge, in the smallest currency unit.
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <code className="text-sm font-mono text-gray-900">
                                            currency<span className="text-red-600">*</span>
                                        </code>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="text-sm text-purple-600 font-mono">string</span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        Three-letter ISO currency code.
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <code className="text-sm font-mono text-gray-900">
                                            customer_email
                                        </code>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="text-sm text-purple-600 font-mono">string</span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        The customer's email address.
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Examples */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* Request Example */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Request Example
                            </h2>
                            <div className="bg-gray-900 rounded-lg overflow-hidden">
                                <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
                                    <span className="text-xs text-gray-400 font-mono">cURL</span>
                                    <button
                                        onClick={handleCopyRequest}
                                        className="flex items-center text-xs text-gray-400 hover:text-white transition-colors"
                                    >
                                        {copiedRequest ? (
                                            <>
                                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                                </svg>
                                                Copied
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                </svg>
                                                Copy
                                            </>
                                        )}
                                    </button>
                                </div>
                                <pre className="p-4 overflow-x-auto">
                                    <code className="text-sm text-gray-100 font-mono">
{`curl https://api.paynala.com/v1/payments \\
  -u sk_test_...: \\
  -d amount=2000 \\
  -d currency="ngn" \\
  -d customer_email="customer@example.com"`}
                                    </code>
                                </pre>
                            </div>
                        </section>

                        {/* Response Example */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Response Example
                            </h2>
                            <div className="bg-gray-900 rounded-lg overflow-hidden">
                                <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
                                    <span className="text-xs text-gray-400 font-mono">JSON</span>
                                    <button
                                        onClick={handleCopyResponse}
                                        className="flex items-center text-xs text-gray-400 hover:text-white transition-colors"
                                    >
                                        {copiedResponse ? (
                                            <>
                                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                                </svg>
                                                Copied
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                </svg>
                                                Copy
                                            </>
                                        )}
                                    </button>
                                </div>
                                <pre className="p-4 overflow-x-auto">
                                    <code className="text-sm text-gray-100 font-mono">
{`{
  "id": "pm_1J...xX",
  "object": "payment",
  "amount": 2000,
  "currency": "ngn",
  "status": "succeeded",
  ...
}`}
                                    </code>
                                </pre>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
