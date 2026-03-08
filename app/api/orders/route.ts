import { createClient } from '@supabase/supabase-js'

// Check if environment variables are properly configured
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey || supabaseUrl.includes('your-project-id')) {
  console.warn('Supabase environment variables are not properly configured. Please check your .env.local file.')
}

const supabase = supabaseUrl && supabaseServiceKey && !supabaseUrl.includes('your-project-id') 
  ? createClient(supabaseUrl, supabaseServiceKey)
  : null

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { customer_name, phone, address, items, total } = body

    // Validate required fields
    if (!customer_name || !phone || !address || !items || total === undefined) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if Supabase is configured
    if (!supabase) {
      return Response.json(
        { error: 'Database not configured. Please contact administrator.' },
        { status: 503 }
      )
    }

    // Insert order into Supabase
    const { data, error } = await supabase
      .from('orders')
      .insert([
        {
          customer_name,
          phone,
          address,
          items,
          total: parseFloat(total),
        },
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return Response.json(
        { error: 'Failed to create order' },
        { status: 500 }
      )
    }

    return Response.json({ success: true, order: data[0] })
  } catch (error) {
    console.error('API error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
