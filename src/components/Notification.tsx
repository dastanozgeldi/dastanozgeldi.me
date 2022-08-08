export default function Notification({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-200 dark:bg-gray-700 mt-4 mb-8 rounded-xl px-8 py-4">
      {children}
    </div>
  );
}
