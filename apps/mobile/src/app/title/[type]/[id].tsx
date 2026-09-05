import { router, useLocalSearchParams } from 'expo-router'
import { Pressable, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function TitlePage() {
	const { id, type } = useLocalSearchParams<{ id: string; type: string }>()

	return (
		<SafeAreaView>
			<Text>
				Title Page {id} ({type})
			</Text>

			<Pressable onPress={() => router.back()}>
				<Text>Press back</Text>
			</Pressable>
		</SafeAreaView>
	)
}
