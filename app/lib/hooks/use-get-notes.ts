import { useQuery } from '@tanstack/react-query'

import { fetchNotes } from '~/apis/firestore'
import { auth } from '~/lib/configs'

// Custom hook to fetch current user data
export const useGetNotes = () => {
  return useQuery({
    queryKey: ['notes'],
    queryFn: fetchNotes,
    enabled: !!auth?.currentUser, // Only run the query if the user is authenticated
    retry: false, // Disable retries since there's no user when not logged in
  })
}
