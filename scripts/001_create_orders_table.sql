-- Create orders table for bakery orders
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT NOT NULL,
  items JSONB NOT NULL,
  total DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS (but allow public inserts for this catalog)
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert orders (public catalog)
CREATE POLICY "Allow public order creation" ON orders
  FOR INSERT
  WITH CHECK (true);

-- Only allow reading own orders (for future use)
CREATE POLICY "Allow reading orders" ON orders
  FOR SELECT
  USING (true);
