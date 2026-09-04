import { TYPE_LABELS } from '@app/constants'
import { MEDIA_TYPES } from '@app/types'
import { StyleSheet, Text, View } from 'react-native'

export default function Index() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Hello, World!</Text>

			<Text>
				{MEDIA_TYPES.map(type => (
					<Text style={styles.item}>{TYPE_LABELS[type]}, </Text>
				))}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 16,
	},
	item: {
		fontSize: 16,
		color: 'gray',
		paddingVertical: 4,
	},
})
