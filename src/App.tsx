/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageLayout } from './components/PageLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { FAQ } from './pages/FAQ';
import { Resources } from './pages/Resources';
import { Fees } from './pages/Fees';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback to home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}

