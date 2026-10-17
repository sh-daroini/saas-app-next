import { SignIn } from "@clerk/nextjs"
import { Suspense } from "react"


const page = () => {
  return (
    <main className="flex items-center justify-center">
      <Suspense fallback={<div className="w-[400px] h-[500px] bg-muted/10 animate-pulse rounded-lg" />}>
        <SignIn />
      </Suspense>
    </main>
  )
}

export default page