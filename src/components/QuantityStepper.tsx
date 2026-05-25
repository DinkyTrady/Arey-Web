export default function QuantityStepper(props: {
  value: number
  onChange: (next: number) => void
  min?: number
}) {
  const min = props.min ?? 1

  return (
    <div className="inline-flex items-center overflow-hidden rounded-lg border border-slate-200 bg-white">
      <button
        type="button"
        className="px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        onClick={() => props.onChange(Math.max(min, props.value - 1))}
        aria-label="Decrease"
      >
        -
      </button>
      <div className="min-w-10 px-3 py-2 text-center text-sm font-semibold text-slate-900">
        {props.value}
      </div>
      <button
        type="button"
        className="px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        onClick={() => props.onChange(props.value + 1)}
        aria-label="Increase"
      >
        +
      </button>
    </div>
  )
}
