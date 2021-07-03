// creating scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x2a3b4c)
// const loader = new THREE.TextureLoader()
// loader.load('./img/andro.jpg', (texture) => (scene.background = texture))

scene.fog = new THREE.Fog(0x76456c, 0.1, 8)

// creating camera
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	2000
)
// camera.position.z = 5

const persepctiveCameraHelper = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	3,
	10
)

const orthographicCameraHelper = new THREE.OrthographicCamera(
	5,
	-5,
	5,
	-5,
	3,
	10
)

const perspectiveHelper = new THREE.CameraHelper(persepctiveCameraHelper)
// scene.add(perspectiveHelper)

const orthographicHelper = new THREE.CameraHelper(orthographicCameraHelper)
scene.add(orthographicHelper)

// adding geometry
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({
	color: 0x00ff00,
	wireframe: true,
})

const cube = new THREE.Mesh(geometry, material)
cube.position.z = -5
scene.add(cube)

// redering Scene and Camera
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// Animation
let i = 0
const animate = () => {
	requestAnimationFrame(animate)
	camera.lookAt(orthographicCameraHelper.position)
	camera.position.x = Math.cos(i) * 30
	camera.position.z = Math.sin(i) * 30

	i += 0.015

	// cube.rotation.x += 0.01
	// cube.rotation.z += 0.01
	renderer.render(scene, camera)
}

animate()
