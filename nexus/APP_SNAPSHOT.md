# Nexus App Snapshot (final state at consolidation)

The nexus web app (hapi-world-nexus.vercel.app) core files preserved verbatim. The 50+ shadcn ui/* components were stock template boilerplate (regenerable, not preserved).

## src/App.tsx

```
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

```

## src/pages/Index.tsx

```
// Update this page (the content is just a fallback if you fail to update the page)

// IMPORTANT: Fully REPLACE this with your own code
const PlaceholderIndex = () => {
  // PLACEHOLDER: Replace this entire return statement with the user's app.
  // The inline background color is intentionally not part of the design system.
  return (
    <div className="flex min-h-screen items-center justify-center" style={{ backgroundColor: '#fcfbf8' }}>
      <img data-lovable-blank-page-placeholder="REMOVE_THIS" src="/placeholder.svg" alt="Your app will live here!" />
    </div>
  );
};

const Index = PlaceholderIndex;

export default Index;

```

## src/omnii-contract.mjs

```
function required(value, name) {
  if (typeof value !== 'string' || value.trim().length === 0) throw new Error(`${name} is required`)
  return value.trim()
}

const VISIBILITIES = new Set(['private', 'relationship', 'community', 'world', 'public'])

export function toOmniiNexusMessage({ fromAgentId, toAgentId, content, relationshipRef = null, visibility = 'relationship' } = {}) {
  required(fromAgentId, 'fromAgentId')
  required(toAgentId, 'toAgentId')
  required(content, 'content')
  if (!VISIBILITIES.has(visibility)) throw new Error('invalid visibility')
  return {
    type: 'communication.message',
    world: 'HAPI_WORLD',
    fromAgentId,
    toAgentId,
    content,
    relationshipRef,
    visibility,
    authorityRef: null,
  }
}

export function toOmniiSocialRelationship({ fromAgentId, toAgentId, relationshipType, context = {} } = {}) {
  required(fromAgentId, 'fromAgentId')
  required(toAgentId, 'toAgentId')
  required(relationshipType, 'relationshipType')
  return {
    type: 'relationship',
    fromAgentId,
    toAgentId,
    relationshipType,
    context,
    authorityRef: null,
  }
}

```

## src/test/omnii-contract.test.ts

```
import { strict as assert } from 'node:assert'
import { toOmniiNexusMessage, toOmniiSocialRelationship } from '../omnii-contract'

const message = toOmniiNexusMessage({ fromAgentId: 'agent:a', toAgentId: 'agent:b', content: 'hello' })
assert.equal(message.type, 'communication.message')
assert.equal(message.world, 'HAPI_WORLD')
assert.equal(message.authorityRef, null)

const relationship = toOmniiSocialRelationship({ fromAgentId: 'agent:a', toAgentId: 'agent:b', relationshipType: 'friend' })
assert.equal(relationship.type, 'relationship')
assert.equal(relationship.authorityRef, null)

assert.throws(() => toOmniiNexusMessage({ fromAgentId: '', toAgentId: 'agent:b', content: 'hello' }), /fromAgentId/)
assert.throws(() => toOmniiSocialRelationship({ fromAgentId: 'agent:a', toAgentId: '', relationshipType: 'friend' }), /toAgentId/)

console.log('hapi-world-nexus boundary tests passed')

```
