import React, { lazy, Suspense } from 'react'

const LazyComp=lazy(()=>import('./Late'))

const LazyTry = () => {
  return (
    <div>
        <Suspense fallback={<p>Loading....</p>}>
        <LazyComp/>
        </Suspense>
        Im the first  
    </div>
  )
}

export default LazyTry