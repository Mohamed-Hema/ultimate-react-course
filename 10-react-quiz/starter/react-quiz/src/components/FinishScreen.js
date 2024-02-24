function FinishScreen({ points, maxPossiblePoints }) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <p className="result">
      You scored
      <strong>
        {points} out of {maxPossiblePoints} {Math.ceil(percentage)}%
      </strong>
    </p>
  );
}

export default FinishScreen;
