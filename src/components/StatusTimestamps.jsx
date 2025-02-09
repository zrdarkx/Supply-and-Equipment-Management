import moment from "moment";

const StatusTimestamps = ({ transaction }) => {
  const formatDate = (date) => {
    if (!date) return "N/A";
    // Verifica si date es un objeto de Firestore Timestamp
    if (date.toDate) {
      return moment(date.toDate()).format("DD/MM/YYYY HH:mm");
    }
    return "N/A";
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800">
      {transaction.rejectionReason && (
        <p className="text-red-500">
          <strong>Motivo de rechazo:</strong> {transaction.rejectionReason}
        </p>
      )}
      <div className="grid grid-cols-2 gap-4 mt-2">
        <div>
          <p>
            <strong>Aprobado:</strong> {formatDate(transaction.approvedDate)}
          </p>
          <p>
            <strong>Entregado:</strong> {formatDate(transaction.deliveredDate)}
          </p>
        </div>
        <div>
          <p>
            <strong>Rechazado:</strong> {formatDate(transaction.rejectedDate)}
          </p>
          <p>
            <strong>Devuelto:</strong> {formatDate(transaction.returnedDate)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatusTimestamps;
