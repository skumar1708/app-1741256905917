import React, { useState } from 'react';\n\nfunction NewsletterSignup() {\n  const [email, setEmail] = useState('');\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    alert(`Thank you for signing up with ${email}`);\n    setEmail('');\n  };\n\n  return (\n    <div className="newsletter-signup">\n      <h3>Sign up for our newsletter</h3>\n      <form onSubmit={handleSubmit}>\n        <input\n          type="email"\n          value={email}\n          onChange={(e) => setEmail(e.target.value)}\n          placeholder="Enter your email"\n          required\n        />\n        <button type="submit">Sign Up</button>\n      </form>\n    </div>\n  );\n}\n\nexport default NewsletterSignup;