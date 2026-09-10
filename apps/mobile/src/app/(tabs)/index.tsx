import { Download, Play, Plus } from 'lucide-react-native'
import { StyleSheet, Text, View } from 'react-native'

import { MEDIA_TYPES } from '@app/types'

import { TYPE_LABELS } from '@app/constants'

import { Button } from '@/components/Button'

export default function Index() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Hello, World!</Text>

			<View style={styles['button-container']}>
				<Button
					icon={Play}
					size='md'
					onPress={() => {}}
				>
					Watch video
				</Button>
				<Button
					icon={Download}
					size='md'
					variant='secondary'
					onPress={() => {}}
				>
					Download
				</Button>
				<Button
					icon={Plus}
					size='md'
					variant='secondary'
					onPress={() => {}}
				/>
			</View>

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
		justifyContent: 'center'
	},
	'button-container': {
		display: 'flex',
		flexDirection: 'row',
		gap: 8,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 20
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white',
		marginBottom: 16
	},
	item: {
		fontSize: 16,
		color: 'gray',
		paddingVertical: 4
	}
})
