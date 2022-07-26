import { useLocalStorage } from "@/hooks/useLocalStorage"

import type { Artifact } from "@/types/Scorer"

export const Header = () => {
  return (
    <div className="md:max-w-md navbar bg-neutral text-neutral-content md:rounded-b-box">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <a className="text-2xl normal-case btn btn-ghost">#ArtifactScorer</a>
      </div>
      <div className="navbar-end">
        <Config />
      </div>
    </div>
  )
}

const Config = () => {
  const [, setStoredArts] = useLocalStorage<Artifact[]>("artifacts", [])

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </label>
      <ul
        tabIndex={0}
        className="w-40 font-semibold shadow dropdown-content menu bg-base-100 rounded-box text-neutral-focus"
      >
        <li className="hover:border-l-4 border-primary">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
            <span>インポート</span>
          </div>
        </li>
        <li className="hover:border-l-4 border-secondary">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-secondary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span>エクスポート</span>
          </div>
        </li>
        <li className="hover:border-l-4 border-error">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-error"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            <span>データ削除</span>
          </div>
        </li>
      </ul>
    </div>
  )
}
