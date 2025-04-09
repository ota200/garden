import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function Home() {
  const { data, error } = await supabase.from('Todos').select('*')

  if (error) {
    console.error('error', error)
  }

  return (
    <div>
      <h1>Home</h1>

      {data && (
        <ul>
          {data.map((todo) => (
            <li key={todo.id}>{todo.description}</li>
          ))}
        </ul>
      )}
    </div>
  )
}