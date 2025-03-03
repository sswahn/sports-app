
import { createContext, useReducer } from 'react'

export const Context = createContext([])

export default function Provider({ children }) {
  const data = {
    auth: undefined,
    router: window.location.pathname || '/',
    dialog: undefined,
    modal: undefined,
    sidebar: false,
    video_duration: [],
    video: [],
    images: [],
    video_captions: [],
    image_captions: [],
    video_caption_styles: [],
    image_caption_styles: [],
    video_editor_styles: [],
    image_editor_styles: [],
    camera: undefined,
    stream: undefined,
    mode: 'camera',
    preview: true,
    field: undefined,
    turnstile: undefined,
    session: false,
    user: {},
    email_verified: false
  }
  function reducer(state, action) {
    // consider using hash instead of switch: return {...state, [action.type]: action.payload}
    switch(action.type) {
      case 'auth':
        return { ...state, auth: action.payload }
      case 'router':
        return { ...state, router: action.payload }
      case 'dialog':
        return { ...state, dialog: action.payload }
      case 'modal':
        return { ...state, modal: action.payload }
      case 'sidebar':
        return { ...state, sidebar: action.payload }
      case 'video_duration':
        return { ...state, video_duration: action.payload }
      case 'video':
        return { ...state, video: action.payload }
      case 'images':
        return { ...state, images: action.payload }
      case 'video_captions':
        return { ...state, video_captions: action.payload }
      case 'image_captions':
        return { ...state, image_captions: action.payload }
      case 'video_caption_styles':
        return { ...state, video_caption_styles: action.payload }
      case 'image_caption_styles':
        return { ...state, image_caption_styles: action.payload }
      case 'video_editor_styles':
        return { ...state, video_editor_styles: action.payload }
      case 'image_editor_styles':
        return { ...state, image_editor_styles: action.payload }
      case 'camera':
        return { ...state, camera: action.payload }
      case 'stream':
        return { ...state, stream: action.payload }
      case 'mode':
        return { ...state, mode: action.payload }
      case 'preview':
        return { ...state, preview: action.payload }
      case 'turnstile':
        return { ...state, turnstile: action.payload }
      case 'session':
        return { ...state, session: action.payload }
      case 'user':
        return { ...state, user: action.payload }
      case 'email_verified':
        return { ...state, email_verified: action.payload }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, data)
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}
