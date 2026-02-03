export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">About Page</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl text-center">
        This is the about page. Scroll down to navigate to the next page
        (Challenge), or scroll up to go back to the home page.
      </p>

      <div className="space-y-4 max-w-2xl">
        <p>Your content goes here...</p>
        <p>Add more content to make the page scrollable.</p>
        <p>
          When you reach the bottom, it will automatically navigate to the next
          page.
        </p>
      </div>

      {/* Add some content to make page scrollable */}
      <div className="mt-20 space-y-8">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="p-8 bg-gray-100 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Section {i}</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center text-gray-500">
        <p>↓ Scroll down to go to Challenge page ↓</p>
      </div>
    </div>
  );
}
