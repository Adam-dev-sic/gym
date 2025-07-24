import { useParams } from "react-router-dom"

const workouts = {
  "barbell-bench-press": {
    video: "gymWorkouts/Chest/Barbell Bench Press.mp4",
    name: "Barbell Bench Press",
    description: "The Barbell Bench Press is a foundational compound exercise that primarily targets the pectoralis major muscles of the chest, while also engaging the anterior deltoids and triceps brachii. Performed lying on a flat bench, the movement involves lowering a barbell to the chest and pressing it upward until the arms are fully extended. This exercise is a staple in strength training and bodybuilding routines, renowned for its effectiveness in building upper body strength, muscle mass, and power. Proper form is crucial to maximize muscle activation and minimize the risk of shoulder or elbow injuries. Variations in grip width and bench angle can further emphasize different regions of the chest and supporting muscles.",
    muscles: ["Chest", "Shoulders", "Triceps"],
  },
  "dumbbell-chest-fly": {
    video: "gymWorkouts/Chest/Dumbbell Chest Fly.mp4",
    name: "Dumbbell Chest Fly",
    description: "The Dumbbell Chest Fly is an isolation exercise designed to stretch and contract the pectoral muscles through a wide range of motion. Performed lying on a flat bench, the movement involves lowering two dumbbells out to the sides of the chest with a slight bend in the elbows, then bringing them together above the chest in a hugging motion. This exercise minimizes triceps involvement and places a deep stretch on the chest, making it ideal for enhancing muscle definition and flexibility. Controlled movement and moderate weights are recommended to avoid shoulder strain and maximize chest engagement.",
    muscles: ["Chest"],
  },
  "decline-dumbbell-fly": {
    video: "gymWorkouts/Chest/Decline Dumbbell Fly.mp4",
    name: "Decline Dumbbell Fly",
    description: "The Decline Dumbbell Fly is a variation of the traditional fly that targets the lower portion of the pectoral muscles. Performed on a decline bench, this exercise involves lowering the dumbbells in a wide arc below chest level and then bringing them together above the lower chest. The decline angle shifts the emphasis to the lower chest fibers, helping to develop a fuller, more balanced chest. Proper control and a moderate range of motion are essential to protect the shoulders and maximize muscle activation.",
    muscles: ["Chest"],
  },
  "hammer-grip-dumbbell-bench-press": {
    video: "gymWorkouts/Chest/Hammer Grip Dumbbell Bench Press.mp4",
    name: "Hammer Grip Dumbbell Bench Press",
    description: "The Hammer Grip Dumbbell Bench Press is a bench press variation where the palms face each other throughout the movement. This neutral grip reduces stress on the shoulder joints and increases triceps and anterior deltoid involvement. The exercise is performed lying on a flat bench, pressing the dumbbells upward while maintaining the neutral grip. This variation is particularly beneficial for individuals with shoulder discomfort during traditional pressing movements and helps promote balanced upper body development.",
    muscles: ["Chest", "Shoulders", "Triceps"],
  },
  "incline-barbell-bench-press": {
    video: "gymWorkouts/Chest/Incline Barbell Bench Press.mp4",
    name: "Incline Barbell Bench Press",
    description: "The Incline Barbell Bench Press is a compound exercise that emphasizes the upper portion of the pectoral muscles and the anterior deltoids. Performed on an incline bench set at a 30–45 degree angle, the movement involves pressing a barbell upward from the upper chest. This angle shifts the workload to the clavicular head of the pectoralis major, helping to develop upper chest thickness and shoulder strength. The incline bench press is a key exercise for achieving a well-rounded, aesthetically balanced chest.",
    muscles: ["Chest", "Shoulders"],
  },
  "pec-deck-chest-fly": {
    video: "gymWorkouts/Chest/PecDeckChestFly.mp4",
    name: "Pec Deck Chest Fly",
    description: "The Pec Deck Chest Fly is a machine-based isolation exercise that targets the pectoral muscles with minimal involvement from supporting muscle groups. Seated in the pec deck machine, the user brings the arms together in a wide arc, focusing on squeezing the chest at the peak contraction. The guided motion of the machine allows for strict form and consistent resistance, making it ideal for safely isolating the chest and achieving a strong muscle pump. This exercise is suitable for all levels and is often used as a finishing movement in chest workouts.",
    muscles: ["Chest"],
  },
  "seated-cable-fly": {
    video: "gymWorkouts/Chest/Seated Cable Fly.mp4",
    name: "Seated Cable Fly",
    description: "The Seated Cable Fly is an isolation exercise that utilizes a cable machine to provide constant tension on the pectoral muscles throughout the movement. Performed seated with the cables set at chest height, the arms are brought together in front of the body in a hugging motion. This exercise allows for a deep stretch and strong contraction of the chest, promoting muscle growth and definition. The adjustable resistance and range of motion make it suitable for targeting different areas of the chest and for all experience levels.",
    muscles: ["Chest"],
  },

  // Shoulder
  "cable-face-pull": {
    video: "gymWorkouts/Shoulder/Cable Face Pull.mp4",
    name: "Cable Face Pull",
    description: "The Cable Face Pull is a highly effective exercise for targeting the rear deltoids, upper back, and rotator cuff muscles. Performed using a rope attachment on a cable machine, the movement involves pulling the rope towards the face with elbows high and flared. This exercise is excellent for improving shoulder health, posture, and upper back strength, making it a valuable addition to any balanced shoulder routine. It is especially beneficial for counteracting the effects of pressing movements and preventing shoulder injuries.",
    muscles: ["Shoulders", "Upper Back"],
  },
  "cable-front-raise": {
    video: "gymWorkouts/Shoulder/Cable Front Raise.mp4",
    name: "Cable Front Raise",
    description: "The Cable Front Raise is an isolation exercise that targets the anterior deltoids. Using a cable machine provides constant tension throughout the movement, which helps maximize muscle activation. The exercise involves lifting the cable handle in front of the body to shoulder height, keeping the arms straight or slightly bent. This movement is ideal for building front shoulder strength and size, and can be performed with various grips or attachments for variation.",
    muscles: ["Shoulders"],
  },
  "cable-supinated-face-pull": {
    video: "gymWorkouts/Shoulder/Cable Supinated Face Pull.mp4",
    name: "Cable Supinated Face Pull",
    description: "The Cable Supinated Face Pull is a variation of the traditional face pull, performed with a supinated (underhand) grip. This grip variation increases activation of the rear deltoids and upper back while also engaging the biceps. The movement helps improve shoulder stability, posture, and upper back development, making it an excellent choice for both strength and injury prevention.",
    muscles: ["Shoulders", "Upper Back"],
  },
  "dumbbell-front-raise": {
    video: "gymWorkouts/Shoulder/Dumbbell Front Raise.mp4",
    name: "Dumbbell Front Raise",
    description: "The Dumbbell Front Raise is an isolation exercise that targets the anterior deltoids. Performed standing or seated, the movement involves lifting dumbbells in front of the body to shoulder height with straight or slightly bent arms. This exercise is effective for building front shoulder strength and definition, and is often used to complement pressing movements in a comprehensive shoulder routine.",
    muscles: ["Shoulders"],
  },
  "lateral-to-front-raise": {
    video: "gymWorkouts/Shoulder/Lateral to Front Raise.mp4",
    name: "Lateral to Front Raise",
    description: "The Lateral to Front Raise is a dynamic shoulder exercise that combines the benefits of both lateral and front raises. The movement begins with a lateral raise to the side, then transitions to a front raise, targeting both the lateral and anterior deltoid heads. This combination enhances shoulder development, coordination, and muscular endurance, making it a valuable addition to any shoulder workout.",
    muscles: ["Shoulders"],
  },
  "machine-reverse-flyes": {
    video: "gymWorkouts/Shoulder/Machine Reverse Flyes.mp4",
    name: "Machine Reverse Flyes",
    description: "Machine Reverse Flyes are a machine-based isolation exercise that targets the rear deltoids and upper back. Seated in the reverse fly machine, the user pushes the handles outward in a reverse hugging motion, focusing on squeezing the shoulder blades together. This exercise is excellent for improving posture, shoulder stability, and upper back strength, and is often used as a finishing movement in shoulder or back routines.",
    muscles: ["Shoulders", "Upper Back"],
  },
  "one-arm-cable-lateral-raise": {
    video: "gymWorkouts/Shoulder/One-Arm Cable Lateral Raise.mp4",
    name: "One-Arm Cable Lateral Raise",
    description: "The One-Arm Cable Lateral Raise is an isolation exercise that targets the lateral deltoids. Using a cable machine allows for constant tension throughout the movement, which helps maximize muscle activation. The exercise involves lifting the cable handle out to the side of the body to shoulder height, focusing on strict form and control. This movement is ideal for building shoulder width and definition.",
    muscles: ["Shoulders"],
  },
  "seated-dumbbell-shoulder-press": {
    video: "gymWorkouts/Shoulder/Seated Dumbbell Shoulder Press.mp4",
    name: "Seated Dumbbell Shoulder Press",
    description: "The Seated Dumbbell Shoulder Press is a compound movement that targets the deltoids, triceps, and upper chest. Performed seated with a pair of dumbbells, the movement involves pressing the weights overhead until the arms are fully extended. This exercise is excellent for building overall shoulder mass and strength, and the seated position helps stabilize the body and reduce lower back strain.",
    muscles: ["Shoulders", "Triceps"],
  },

  // Tricep
  "cable-overhead-triceps-extension": {
    video: "gymWorkouts/Tricep/Cable Overhead Triceps Extension.mp4",
    name: "Cable Overhead Triceps Extension",
    description: "The Cable Overhead Triceps Extension is an isolation exercise that targets the long head of the triceps. Performed with a rope or straight bar attachment on a cable machine, the movement involves extending the arms overhead while keeping the elbows stationary. This exercise is effective for building triceps size and strength, and the cable provides constant tension throughout the range of motion.",
    muscles: ["Triceps"],
  },
  "close-grip-smith-bench-press": {
    video: "gymWorkouts/Tricep/Close Grip Smith Bench Press.mp4",
    name: "Close Grip Smith Bench Press",
    description: "The Close Grip Smith Bench Press is a bench press variation performed on a Smith machine with the hands placed closer together. This grip emphasizes the triceps while still engaging the chest and shoulders. The Smith machine provides stability and safety, making it easier to focus on triceps activation and control. This exercise is ideal for building triceps mass and strength.",
    muscles: ["Chest", "Triceps"],
  },
  "dumbbell-seated-triceps-extension": {
    video: "gymWorkouts/Tricep/Dumbbell Seated Triceps Extension.mp4",
    name: "Dumbbell Seated Triceps Extension",
    description: "The Dumbbell Seated Triceps Extension is an isolation exercise that targets the triceps, particularly the long head. Performed seated with a single dumbbell held overhead, the movement involves lowering the weight behind the head and then extending the arms upward. This exercise is effective for building triceps size and strength, and the overhead position provides a deep stretch for maximum muscle activation.",
    muscles: ["Triceps"],
  },
  "ez-bar-seated-triceps-extension": {
    video: "gymWorkouts/Tricep/EZ-Bar Seated Triceps Extension.mp4",
    name: "EZ-Bar Seated Triceps Extension",
    description: "The EZ-Bar Seated Triceps Extension is an overhead triceps isolation exercise performed with an EZ-bar. The angled grip of the EZ-bar reduces wrist strain and allows for a comfortable range of motion. The movement involves lowering the bar behind the head and then extending the arms upward, focusing on squeezing the triceps at the top. This exercise is excellent for building triceps mass and strength.",
    muscles: ["Triceps"],
  },
  "high-pulley-overhead-triceps-extension": {
    video: "gymWorkouts/Tricep/High Pulley Overhead Triceps Extension.mp4",
    name: "High Pulley Overhead Triceps Extension",
    description: "The High Pulley Overhead Triceps Extension is a cable-based isolation exercise that targets the long head of the triceps. Performed with a rope or bar attachment on a high pulley, the movement involves extending the arms overhead while keeping the elbows stationary. The cable provides constant tension, making this exercise effective for building triceps size and definition.",
    muscles: ["Triceps"],
  },
  "lying-ez-bar-triceps-extension": {
    video: "gymWorkouts/Tricep/Lying EZ-Bar Triceps Extension.mp4",
    name: "Lying EZ-Bar Triceps Extension",
    description: "The Lying EZ-Bar Triceps Extension, also known as the skullcrusher, is a classic triceps isolation exercise. Performed lying on a bench with an EZ-bar, the movement involves lowering the bar to the forehead or just behind the head and then extending the arms upward. This exercise is highly effective for building triceps mass and strength, and the EZ-bar grip reduces wrist strain.",
    muscles: ["Triceps"],
  },
  "machine-triceps-extension": {
    video: "gymWorkouts/Tricep/Machine Triceps Extension.mp4",
    name: "Machine Triceps Extension",
    description: "The Machine Triceps Extension is a machine-based isolation exercise that targets the triceps. Seated in the machine, the user extends the arms against resistance, focusing on squeezing the triceps at the peak contraction. The guided motion of the machine allows for strict form and consistent resistance, making it ideal for safely isolating the triceps and achieving a strong muscle pump.",
    muscles: ["Triceps"],
  },
  "machine-triceps-pushdown": {
    video: "gymWorkouts/Tricep/Machine Triceps Pushdown.mp4",
    name: "Machine Triceps Pushdown",
    description: "The Machine Triceps Pushdown is a pushdown movement performed on a dedicated triceps machine. The exercise involves extending the arms downward against resistance, focusing on contracting the triceps at the bottom of the movement. This exercise is effective for building triceps size and strength, and the machine provides stability and safety.",
    muscles: ["Triceps"],
  },
  "one-arm-overhead-triceps-extension": {
    video: "gymWorkouts/Tricep/One-Arm Overhead Triceps Extension.mp4",
    name: "One-Arm Overhead Triceps Extension",
    description: "The One-Arm Overhead Triceps Extension is an isolation exercise that targets the triceps, particularly the long head. Performed with a single dumbbell or cable, the movement involves extending one arm overhead while keeping the elbow stationary. This exercise allows for unilateral training, helping to correct muscle imbalances and improve triceps symmetry.",
    muscles: ["Triceps"],
  },
  "triceps-cable-pushdown-reverse-grip": {
    video: "gymWorkouts/Tricep/Triceps Cable Pushdown Reverse Grip.mp4",
    name: "Triceps Cable Pushdown Reverse Grip",
    description: "The Triceps Cable Pushdown Reverse Grip is a pushdown variation performed with an underhand (supinated) grip. This grip emphasizes the medial head of the triceps and provides a unique stimulus compared to the traditional overhand grip. The exercise is performed on a cable machine, extending the arms downward while keeping the elbows close to the body.",
    muscles: ["Triceps"],
  },

  // Bicep
  "cable-preacher-curl": {
    video: "gymWorkouts/Bicep/Cable Preacher Curl.mp4",
    name: "Cable Preacher Curl",
    description: "The Cable Preacher Curl is an isolation exercise that targets the biceps brachii. Performed on a preacher bench with a cable machine, the movement involves curling the handle upward while keeping the upper arms stationary. The cable provides constant tension throughout the range of motion, making this exercise effective for building biceps size and peak.",
    muscles: ["Biceps"],
  },
  "double-dumbbell-preacher-curl": {
    video: "gymWorkouts/Bicep/Double Dumbbell Preacher Curl.mp4",
    name: "Double Dumbbell Preacher Curl",
    description: "The Double Dumbbell Preacher Curl is a biceps isolation exercise performed on a preacher bench with a dumbbell in each hand. The movement involves curling the dumbbells upward while keeping the upper arms stationary. This exercise allows for unilateral training, helping to correct muscle imbalances and improve biceps symmetry.",
    muscles: ["Biceps"],
  },
  "dumbbell-hammer-curl": {
    video: "gymWorkouts/Bicep/Dumbbell Hammer Curl.mp4",
    name: "Dumbbell Hammer Curl",
    description: "The Dumbbell Hammer Curl is a biceps and forearms exercise performed with a neutral grip (palms facing each other). This grip emphasizes the brachialis and brachioradialis muscles, contributing to overall arm thickness and strength. The movement involves curling the dumbbells upward while keeping the elbows close to the body.",
    muscles: ["Biceps", "Forearms"],
  },
  "dumbbell-spider-curl": {
    video: "gymWorkouts/Bicep/Dumbbell Spider Curl.mp4",
    name: "Dumbbell Spider Curl",
    description: "The Dumbbell Spider Curl is a biceps isolation exercise performed lying face down on an incline bench. This position eliminates momentum and maximizes biceps contraction throughout the movement. The exercise is effective for building biceps peak and improving muscle definition.",
    muscles: ["Biceps"],
  },
  "dumbbell-supinated-preacher-curl": {
    video: "gymWorkouts/Bicep/Dumbbell Supinated Preacher Curl.mp4",
    name: "Dumbbell Supinated Preacher Curl",
    description: "The Dumbbell Supinated Preacher Curl is a biceps isolation exercise performed on a preacher bench with a supinated (palms up) grip. This grip maximizes biceps activation and helps build size and peak. The movement involves curling the dumbbells upward while keeping the upper arms stationary.",
    muscles: ["Biceps"],
  },
  "machine-preacher-curl": {
    video: "gymWorkouts/Bicep/Machine Preacher Curl.mp4",
    name: "Machine Preacher Curl",
    description: "The Machine Preacher Curl is a machine-based isolation exercise that targets the biceps. Seated in the preacher curl machine, the user curls the handles upward while keeping the upper arms stationary. The guided motion of the machine allows for strict form and consistent resistance, making it ideal for safely isolating the biceps and achieving a strong muscle pump.",
    muscles: ["Biceps"],
  },
  "one-arm-machine-preacher-curl": {
    video: "gymWorkouts/Bicep/One-Arm Machine Preacher Curl.mp4",
    name: "One-Arm Machine Preacher Curl",
    description: "The One-Arm Machine Preacher Curl is a unilateral biceps isolation exercise performed on a preacher curl machine. The movement involves curling one handle upward while keeping the upper arm stationary. This exercise allows for focused training on each arm, helping to correct muscle imbalances and improve biceps symmetry.",
    muscles: ["Biceps"],
  },
  "preacher-hammer-curl": {
    video: "gymWorkouts/Bicep/Preacher Hammer Curl.mp4",
    name: "Preacher Hammer Curl",
    description: "The Preacher Hammer Curl is a biceps and forearms exercise performed on a preacher bench with a neutral grip (palms facing each other). This grip emphasizes the brachialis and brachioradialis muscles, contributing to overall arm thickness and strength. The movement involves curling the dumbbells upward while keeping the upper arms stationary.",
    muscles: ["Biceps", "Forearms"],
  },
  "rope-cable-hammer-curl": {
    video: "gymWorkouts/Bicep/Rope Cable Hammer Curl.mp4",
    name: "Rope Cable Hammer Curl",
    description: "The Rope Cable Hammer Curl is a biceps and forearms exercise performed with a rope attachment on a cable machine. The neutral grip emphasizes the brachialis and brachioradialis muscles, while the cable provides constant tension throughout the movement. This exercise is effective for building arm thickness and strength.",
    muscles: ["Biceps", "Forearms"],
  },
  "zottman-curl": {
    video: "gymWorkouts/Bicep/Zottman Curl.mp4",
    name: "Zottman Curl",
    description: "The Zottman Curl is a unique biceps and forearms exercise that combines a standard curl with a reverse curl. The movement involves curling the dumbbells upward with a supinated grip, rotating the wrists to a pronated grip at the top, and lowering the weights in a reverse curl motion. This exercise targets both the biceps and forearm muscles, improving grip strength and overall arm development.",
    muscles: ["Biceps", "Forearms"],
  },

  // Back
  "band-bent-over-lat-pulldown": {
    video: "gymWorkouts/Back/Band Bent Over Lat Pulldown.mp4",
    name: "Band Bent Over Lat Pulldown",
    description: "The Band Bent Over Lat Pulldown is a back exercise performed using a resistance band. The movement simulates a traditional lat pulldown, targeting the latissimus dorsi and upper back muscles. This exercise is ideal for home workouts or as a warm-up, providing variable resistance and improving back strength and mobility.",
    muscles: ["Back", "Lats"],
  },
  "barbell-bent-over-row-from-pin": {
    video: "gymWorkouts/Back/Barbell Bent Over Row From Pin.mp4",
    name: "Barbell Bent Over Row From Pin",
    description: "The Barbell Bent Over Row From Pin is a variation of the classic barbell row, performed from a dead stop with the barbell resting on safety pins or blocks. This technique eliminates momentum and increases back and grip strength by requiring each repetition to start from a stationary position. The exercise targets the lats, rhomboids, and biceps, and is excellent for building a thick, strong back.",
    muscles: ["Back", "Lats", "Biceps"],
  },
  "barbell-bent-over-row": {
    video: "gymWorkouts/Back/Barbell Bent Over Row.mp4",
    name: "Barbell Bent Over Row",
    description: "The Barbell Bent Over Row is a compound back exercise that targets the latissimus dorsi, rhomboids, and biceps. Performed with a barbell, the movement involves pulling the weight toward the lower chest or abdomen while maintaining a bent-over position. This exercise is essential for building back thickness, strength, and overall upper body development.",
    muscles: ["Back", "Lats", "Biceps"],
  },
  "barbell-rear-delt-row": {
    video: "gymWorkouts/Back/Barbell Rear Delt Row.mp4",
    name: "Barbell Rear Delt Row",
    description: "The Barbell Rear Delt Row is a row variation that emphasizes the rear deltoids and upper back. Performed with a wide grip and elbows flared, the movement targets the posterior shoulders and upper traps, helping to improve posture and shoulder stability. This exercise is often used as an accessory movement in back or shoulder routines.",
    muscles: ["Back", "Rear Delts"],
  },
  "cable-neutral-grip-lat-pulldown": {
    video: "gymWorkouts/Back/Cable Neutral Grip Lat Pulldown.mp4",
    name: "Cable Neutral Grip Lat Pulldown",
    description: "The Cable Neutral Grip Lat Pulldown is a back exercise performed on a cable machine with a neutral (palms facing each other) grip. This grip variation emphasizes the lower lats and biceps, providing a unique stimulus compared to traditional wide-grip pulldowns. The movement involves pulling the handle down to the chest while keeping the elbows close to the body.",
    muscles: ["Back", "Lats"],
  },
  "cable-seated-row-neutral-grip": {
    video: "gymWorkouts/Back/Cable Seated Row Neutral Grip.mp4",
    name: "Cable Seated Row Neutral Grip",
    description: "The Cable Seated Row Neutral Grip is a back exercise performed on a cable row machine with a neutral grip attachment. The movement involves pulling the handle toward the torso while keeping the elbows close to the body, targeting the lats, rhomboids, and biceps. This exercise is effective for building back thickness and improving posture.",
    muscles: ["Back", "Lats", "Biceps"],
  },
  "cable-wide-grip-behind-neck-pulldown": {
    video: "gymWorkouts/Back/Cable Wide Grip Behind Neck Pulldown.mp4",
    name: "Cable Wide Grip Behind Neck Pulldown",
    description: "The Cable Wide Grip Behind Neck Pulldown is a lat pulldown variation performed with a wide grip, pulling the bar behind the neck. This movement emphasizes the upper lats and upper back, but requires good shoulder mobility and control. It is important to use light weights and strict form to avoid shoulder strain.",
    muscles: ["Back", "Lats"],
  },
  "chest-supported-machine-row": {
    video: "gymWorkouts/Back/Chest Supported Machine Row.mp4",
    name: "Chest Supported Machine Row",
    description: "The Chest Supported Machine Row is a back exercise performed on a machine with chest support. The support eliminates lower back involvement, allowing for strict form and maximum activation of the lats, rhomboids, and biceps. This exercise is ideal for isolating the back muscles and reducing the risk of lower back injury.",
    muscles: ["Back", "Lats", "Biceps"],
  },
  "double-dumbbell-bent-over-row": {
    video: "gymWorkouts/Back/Double Dumbbell Bent Over Row.mp4",
    name: "Double Dumbbell Bent Over Row",
    description: "The Double Dumbbell Bent Over Row is a compound back exercise performed with a dumbbell in each hand. The movement involves pulling the weights toward the torso while maintaining a bent-over position, targeting the lats, rhomboids, and biceps. This exercise allows for a greater range of motion and unilateral training compared to the barbell row.",
    muscles: ["Back", "Lats", "Biceps"],
  },
  "dumbbell-bent-over-row": {
    video: "gymWorkouts/Back/Dumbbell Bent Over Row.mp4",
    name: "Dumbbell Bent Over Row",
    description: "The Dumbbell Bent Over Row is a unilateral back exercise performed with a single dumbbell. The movement involves pulling the weight toward the torso while maintaining a bent-over position, targeting the lats, rhomboids, and biceps. This exercise is effective for correcting muscle imbalances and improving back strength and symmetry.",
    muscles: ["Back", "Lats", "Biceps"],
  },
  "dumbbell-kelso-shrugs": {
    video: "gymWorkouts/Back/Dumbbell Kelso Shrugs.mp4",
    name: "Dumbbell Kelso Shrugs",
    description: "Dumbbell Kelso Shrugs are a trap and upper back exercise performed in a bent-over position. The movement involves shrugging the shoulders upward while holding dumbbells, focusing on squeezing the traps and upper back. This exercise is effective for building trap size and improving upper back strength and posture.",
    muscles: ["Traps", "Upper Back"],
  },
  "incline-bench-dumbbell-wide-row": {
    video: "gymWorkouts/Back/Incline Bench Dumbbell Wide Row.mp4",
    name: "Incline Bench Dumbbell Wide Row",
    description: "The Incline Bench Dumbbell Wide Row is a back and rear deltoid exercise performed lying face down on an incline bench. The movement involves pulling the dumbbells outward in a wide arc, targeting the upper back and rear delts. This exercise is effective for improving posture, shoulder stability, and upper back development.",
    muscles: ["Back", "Rear Delts"],
  },
  "one-arm-cable-half-kneeling-lat-pulldown": {
    video: "gymWorkouts/Back/One-Arm Cable Half-Kneeling Lat Pulldown.mp4",
    name: "One-Arm Cable Half-Kneeling Lat Pulldown",
    description: "The One-Arm Cable Half-Kneeling Lat Pulldown is a unilateral back exercise performed in a half-kneeling position. The movement involves pulling the cable handle down to the side of the torso, targeting the lats and improving unilateral strength and stability. This exercise is ideal for correcting muscle imbalances and enhancing core engagement.",
    muscles: ["Back", "Lats"],
  },
  "one-arm-chest-supported-row-machine": {
    video: "gymWorkouts/Back/One-Arm Chest Supported Row Machine.mp4",
    name: "One-Arm Chest Supported Row Machine",
    description: "The One-Arm Chest Supported Row Machine is a unilateral back exercise performed on a chest-supported row machine. The movement involves pulling one handle toward the torso, focusing on strict form and maximum activation of the lats, rhomboids, and biceps. This exercise is effective for correcting muscle imbalances and improving back strength and symmetry.",
    muscles: ["Back", "Lats", "Biceps"],
  },
  "one-arm-dumbbell-bent-over-scapula-row": {
    video: "gymWorkouts/Back/One-Arm Dumbbell Bent Over Scapula Row.mp4",
    name: "One-Arm Dumbbell Bent Over Scapula Row",
    description: "The One-Arm Dumbbell Bent Over Scapula Row is a back exercise that emphasizes scapular movement and control. The movement involves pulling the dumbbell toward the torso while focusing on retracting and protracting the scapula. This exercise is effective for improving scapular stability, shoulder health, and upper back strength.",
    muscles: ["Back", "Lats"],
  },
  "one-arm-low-cable-seated-row": {
    video: "gymWorkouts/Back/One-Arm Low Cable Seated Row.mp4",
    name: "One-Arm Low Cable Seated Row",
    description: "The One-Arm Low Cable Seated Row is a unilateral back exercise performed on a cable row machine. The movement involves pulling the handle toward the torso with one arm, targeting the lats, rhomboids, and biceps. This exercise is effective for correcting muscle imbalances and improving back strength and symmetry.",
    muscles: ["Back", "Lats", "Biceps"],
  },
  "rope-straight-arm-lat-pulldown": {
    video: "gymWorkouts/Back/Rope Straight-Arm Lat Pulldown.mp4",
    name: "Rope Straight-Arm Lat Pulldown",
    description: "The Rope Straight-Arm Lat Pulldown is a back exercise performed on a cable machine with a rope attachment. The movement involves pulling the rope down in front of the body with straight arms, targeting the lats and improving back width and definition. This exercise is effective for isolating the lats and enhancing mind-muscle connection.",
    muscles: ["Back", "Lats"],
  },
  "rowing-machine": {
    video: "gymWorkouts/Back/Rowing Machine.mp4",
    name: "Rowing Machine",
    description: "The Rowing Machine is a cardio and back exercise that simulates the motion of rowing a boat. The movement involves pulling the handle toward the torso while extending the legs, targeting the back, lats, biceps, and legs. This exercise is excellent for improving cardiovascular fitness, muscular endurance, and overall body conditioning.",
    muscles: ["Back", "Lats", "Biceps"],
  },
  "seated-cable-row": {
    video: "gymWorkouts/Back/Seated Cable Row.mp4",
    name: "Seated Cable Row",
    description: "The Seated Cable Row is a back exercise performed on a cable row machine. The movement involves pulling the handle toward the torso while keeping the elbows close to the body, targeting the lats, rhomboids, and biceps. This exercise is effective for building back thickness and improving posture.",
    muscles: ["Back", "Lats", "Biceps"],
  },
  "seated-cable-wide-grip-row": {
    video: "gymWorkouts/Back/Seated Cable Wide Grip Row.mp4",
    name: "Seated Cable Wide Grip Row",
    description: "The Seated Cable Wide Grip Row is a back exercise performed on a cable row machine with a wide grip attachment. The movement involves pulling the handle toward the torso with elbows flared, targeting the upper back and rear delts. This exercise is effective for building upper back thickness and improving posture.",
    muscles: ["Back", "Lats", "Biceps"],
  },
  "smith-bent-over-row": {
    video: "gymWorkouts/Back/Smith Bent Over Row.mp4",
    name: "Smith Bent Over Row",
    description: "The Smith Bent Over Row is a back exercise performed on a Smith machine. The movement involves pulling the bar toward the torso while maintaining a bent-over position, targeting the lats, rhomboids, and biceps. The Smith machine provides stability and safety, making it easier to focus on back activation and control.",
    muscles: ["Back", "Lats", "Biceps"],
  },
  "t-bar-chest-supported-row": {
    video: "gymWorkouts/Back/T-Bar Chest Suported Row.mp4",
    name: "T-Bar Chest Supported Row",
    description: "The T-Bar Chest Supported Row is a back exercise performed on a T-bar row machine with chest support. The support eliminates lower back involvement, allowing for strict form and maximum activation of the lats, rhomboids, and biceps. This exercise is ideal for isolating the back muscles and reducing the risk of lower back injury.",
    muscles: ["Back", "Lats", "Biceps"],
  },
  "wide-grip-chest-supported-row": {
    video: "gymWorkouts/Back/Wide Grip Chest Supported Row.mp4",
    name: "Wide Grip Chest Supported Row",
    description: "The Wide Grip Chest Supported Row is a back exercise performed on a chest-supported row machine with a wide grip. The movement involves pulling the handles toward the torso with elbows flared, targeting the upper back and rear delts. This exercise is effective for building upper back thickness and improving posture.",
    muscles: ["Back", "Lats", "Biceps"],
  },
  "wide-grip-lat-pulldown": {
    video: "gymWorkouts/Back/Wide Grip Lat Pulldown.mp4",
    name: "Wide Grip Lat Pulldown",
    description: "The Wide Grip Lat Pulldown is a classic back exercise performed on a cable machine with a wide grip attachment. The movement involves pulling the bar down to the chest with elbows flared, targeting the upper lats and back. This exercise is effective for building back width and improving upper body strength.",
    muscles: ["Back", "Lats"],
  },
  // Calisthenics
  "back-extension": {
    video: "calisthenics/Back/Back Extension.mp4",
    name: "Back Extension",
    description: "The Back Extension is a bodyweight exercise that targets the lower back muscles, specifically the erector spinae. Performed on a hyperextension bench or the floor, the movement involves extending the torso upward from a flexed position. This exercise is essential for strengthening the lower back, improving posture, and preventing lower back injuries.",
    muscles: ["Back"],
  },
  "full-planche": {
    video: "calisthenics/Shoulder/Full Planche.mp4",
    name: "Full Planche",
    description: "The Full Planche is an advanced calisthenics hold that requires full body tension and exceptional shoulder, core, and arm strength. Performed by balancing the body parallel to the ground on the hands, this exercise demonstrates elite levels of strength, balance, and control. It is a hallmark skill in gymnastics and advanced bodyweight training.",
    muscles: ["Shoulders", "Core"],
  },
  "handstand-hold": {
    video: "calisthenics/Shoulder/Handstand Hold.mp4",
    name: "Handstand Hold",
    description: "The Handstand Hold is a static bodyweight exercise that develops balance, shoulder stability, and core strength. Performed by balancing the body vertically on the hands, this exercise is fundamental in gymnastics and calisthenics. It improves proprioception, upper body strength, and overall body control.",
    muscles: ["Shoulders", "Core"],
  },
  "pike-push-up-shoulder": {
    video: "calisthenics/Shoulder/Pike Push-Up.mp4",
    name: "Pike Push-Up",
    description: "The Pike Push-Up is a push-up variation that emphasizes the shoulders and triceps. Performed with the hips elevated and the body in an inverted V position, the movement involves lowering the head toward the ground and pressing back up. This exercise is effective for building shoulder strength and preparing for handstand push-ups.",
    muscles: ["Shoulders", "Triceps"],
  },
  "handstand-push-up": {
    video: "calisthenics/Shoulder/Handstand Push-Up.mp4",
    name: "Handstand Push-Up",
    description: "The Handstand Push-Up is a vertical pressing movement that targets the shoulders, triceps, and upper chest. Performed by lowering the body from a handstand position and pressing back up, this exercise requires significant strength, balance, and control. It is a hallmark skill in advanced calisthenics and gymnastics.",
    muscles: ["Shoulders", "Triceps"],
  },
  "pike-push-up-between-benches-shoulder": {
    video: "calisthenics/Shoulder/Pike Push-Up Between Benches.mp4",
    name: "Pike Push-Up Between Benches",
    description: "The Pike Push-Up Between Benches is a deeper variation of the pike push-up, performed with the hands and feet elevated on benches. This increased range of motion enhances shoulder activation and strength, making it an excellent progression toward handstand push-ups.",
    muscles: ["Shoulders", "Triceps"],
  },
  "arm-circles": {
    video: "calisthenics/Shoulder/Arm Circles.mp4",
    name: "Arm Circles",
    description: "Arm Circles are a dynamic warm-up exercise that improves shoulder mobility, flexibility, and blood flow. Performed by rotating the arms in large circles, this movement prepares the shoulders for more intense upper body exercises and helps prevent injuries.",
    muscles: ["Shoulders"],
  },
  "clap-push-up": {
    video: "calisthenics/Chest/Clap Push-Up.mp4",
    name: "Clap Push-Up",
    description: "The Clap Push-Up is an explosive push-up variation that develops upper body power, speed, and chest activation. Performed by pushing off the ground with enough force to clap the hands before landing, this exercise enhances fast-twitch muscle fibers and athletic performance.",
    muscles: ["Chest", "Triceps"],
  },
  "archer-push-up": {
    video: "calisthenics/Chest/Archer Push-Up.mp4",
    name: "Archer Push-Up",
    description: "The Archer Push-Up is a unilateral push-up variation that increases chest and triceps strength. Performed by shifting the body weight to one side while extending the opposite arm, this exercise challenges stability, control, and muscle coordination. It is an excellent progression toward one-arm push-ups.",
    muscles: ["Chest", "Triceps"],
  },
  "cobra-push-up": {
    video: "calisthenics/Chest/Cobra Push-Up.mp4",
    name: "Cobra Push-Up",
    description: "The Cobra Push-Up is a push-up variation that stretches the chest and works the triceps. The movement involves lowering the body to the ground and then arching the chest upward, mimicking the cobra yoga pose. This exercise improves chest flexibility, triceps strength, and spinal mobility.",
    muscles: ["Chest", "Triceps"],
  },
  "chest-dips": {
    video: "calisthenics/Chest/Chest Dips.mp4",
    name: "Chest Dips",
    description: "Chest Dips are a dip variation that targets the lower chest and triceps. Performed on parallel bars with a forward lean, the movement involves lowering the body below the bars and pressing back up. This exercise is effective for building chest mass, triceps strength, and upper body power.",
    muscles: ["Chest", "Triceps"],
  },
  "resistance-band-push-up": {
    video: "calisthenics/Chest/Resistance Band Push-Up.mp4",
    name: "Resistance Band Push-Up",
    description: "The Resistance Band Push-Up is a push-up variation performed with a resistance band looped across the back. The added resistance increases chest and triceps activation, making the exercise more challenging and effective for building strength and muscle mass.",
    muscles: ["Chest", "Triceps"],
  },
  "weighted-push-up": {
    video: "calisthenics/Chest/Weighted Push-Up.mp4",
    name: "Weighted Push-Up",
    description: "The Weighted Push-Up is a push-up variation performed with added weight, such as a weight plate or vest. The increased resistance enhances chest, shoulder, and triceps strength, making the exercise more effective for building muscle mass and power.",
    muscles: ["Chest", "Triceps"],
  },
  "ring-dips": {
    video: "calisthenics/Chest/Ring Dips.mp4",
    name: "Ring Dips",
    description: "Ring Dips are a dip variation performed on gymnastic rings, increasing instability and muscle activation. The movement targets the chest, triceps, and shoulders, and requires significant strength, balance, and control. This exercise is excellent for advanced athletes seeking to improve upper body strength and stability.",
    muscles: ["Chest", "Triceps", "Shoulders"],
  },
  "push-up": {
    video: "calisthenics/Chest/Push-Up.mp4",
    name: "Push-Up",
    description: "The Push-Up is a classic bodyweight exercise that targets the chest, shoulders, and triceps. Performed by lowering the body to the ground and pressing back up, this exercise is fundamental for building upper body strength, endurance, and muscle definition.",
    muscles: ["Chest", "Shoulders", "Triceps"],
  },
  "negative-push-up": {
    video: "calisthenics/Chest/Negative Push-Up.mp4",
    name: "Negative Push-Up",
    description: "The Negative Push-Up is a push-up variation that focuses on the eccentric (lowering) phase of the movement. Performed by lowering the body slowly to the ground, this exercise increases time under tension and enhances muscle growth and strength.",
    muscles: ["Chest", "Triceps"],
  },
  "weighted-chin-up-bicep": {
    video: "calisthenics/Bicep/Weighted Chin Up.mp4",
    name: "Weighted Chin Up",
    description: "The Weighted Chin Up is a chin-up variation performed with added weight, such as a weight belt or vest. The movement targets the biceps and back, increasing strength and muscle mass. This exercise is ideal for advanced athletes seeking to progress beyond bodyweight chin-ups.",
    muscles: ["Biceps", "Back"],
  },
  "chin-up-bicep": {
    video: "calisthenics/Bicep/Chin-Up.mp4",
    name: "Chin-Up",
    description: "The Chin-Up is a pull-up variation performed with a supinated (palms facing you) grip. This grip emphasizes the biceps while still engaging the back muscles. The movement involves pulling the chin above the bar, building upper body strength and muscle mass.",
    muscles: ["Biceps", "Back"],
  },
  "knee-close-grip-push-up": {
    video: "calisthenics/Tricep/Knee Close Grip Push-Up.mp4",
    name: "Knee Close Grip Push-Up",
    description: "The Knee Close Grip Push-Up is a push-up variation performed from the knees with the hands placed close together. This position emphasizes the triceps and chest, making the exercise more accessible for beginners or as a triceps isolation movement.",
    muscles: ["Triceps", "Chest"],
  },
  "diamond-push-up": {
    video: "calisthenics/Tricep/Diamond Push-Up.mp4",
    name: "Diamond Push-Up",
    description: "The Diamond Push-Up is a push-up variation performed with the hands together in a diamond shape under the chest. This grip increases triceps activation while still engaging the chest. The movement is effective for building triceps size and strength.",
    muscles: ["Triceps", "Chest"],
  },
  "weighted-dips": {
    video: "calisthenics/Tricep/Weighted Dips.mp4",
    name: "Weighted Dips",
    description: "Weighted Dips are a dip variation performed with added weight, such as a weight belt or vest. The movement targets the triceps and chest, increasing strength and muscle mass. This exercise is ideal for advanced athletes seeking to progress beyond bodyweight dips.",
    muscles: ["Triceps", "Chest"],
  },
  "incline-close-grip-push-up": {
    video: "calisthenics/Tricep/Incline Close Grip Push-Up.mp4",
    name: "Incline Close Grip Push-Up",
    description: "The Incline Close Grip Push-Up is a push-up variation performed on an incline surface with the hands placed close together. This position emphasizes the triceps and chest, making the exercise more accessible for beginners or as a triceps isolation movement.",
    muscles: ["Triceps", "Chest"],
  },
  "weighted-bench-dips": {
    video: "calisthenics/Tricep/Weighted Bench Dips.mp4",
    name: "Weighted Bench Dips",
    description: "Weighted Bench Dips are a triceps isolation exercise performed with the hands on a bench and added weight on the lap. The movement involves lowering the body below the bench and pressing back up, targeting the triceps and improving upper body strength.",
    muscles: ["Triceps"],
  },
  "reverse-hand-push-up": {
    video: "calisthenics/Tricep/Reverse Hand Push-Up.mp4",
    name: "Reverse Hand Push-Up",
    description: "The Reverse Hand Push-Up is a push-up variation performed with the hands rotated so the fingers point toward the feet. This position increases triceps activation and wrist flexibility, making the exercise effective for building triceps strength and mobility.",
    muscles: ["Triceps"],
  },
  "full-planche-push-up": {
    video: "calisthenics/Tricep/Full Planche Push-Up.mp4",
    name: "Full Planche Push-Up",
    description: "The Full Planche Push-Up is an advanced push-up variation performed in the full planche position, with the body parallel to the ground and supported only by the hands. This exercise requires exceptional strength, balance, and control, targeting the triceps, shoulders, and core.",
    muscles: ["Triceps", "Shoulders", "Core"],
  },
  "pike-push-up-tricep": {
    video: "calisthenics/Tricep/Pike Push-Up.mp4",
    name: "Pike Push-Up",
    description: "The Pike Push-Up is a triceps-focused push-up variation performed with the hips elevated and the body in an inverted V position. The movement emphasizes the triceps and shoulders, making it an effective exercise for building upper body strength.",
    muscles: ["Triceps", "Shoulders"],
  },
  "decline-diamond-push-up": {
    video: "calisthenics/Tricep/Decline Diamond Push-Up.mp4",
    name: "Decline Diamond Push-Up",
    description: "The Decline Diamond Push-Up is a push-up variation performed with the feet elevated and the hands together in a diamond shape. This position increases triceps activation and adds intensity to the movement, making it effective for building triceps size and strength.",
    muscles: ["Triceps", "Chest"],
  },
  "pike-push-up-between-benches-tricep": {
    video: "calisthenics/Tricep/Pike Push-Up Between Benches.mp4",
    name: "Pike Push-Up Between Benches",
    description: "The Pike Push-Up Between Benches is a deeper pike push-up variation performed with the hands and feet elevated on benches. This increased range of motion enhances triceps and shoulder activation, making it an excellent progression toward advanced push-up variations.",
    muscles: ["Triceps", "Shoulders"],
  },
  "negative-pull-up": {
    video: "calisthenics/Back/Negative Pull-Up.mp4",
    name: "Negative Pull-Up",
    description: "The Negative Pull-Up is a pull-up variation that focuses on the eccentric (lowering) phase of the movement. Performed by lowering the body slowly from the top position, this exercise increases time under tension and enhances back and biceps strength.",
    muscles: ["Back", "Biceps"],
  },
  "flag": {
    video: "calisthenics/Back/Flag.mp4",
    name: "Flag",
    description: "The Flag is an advanced static hold that requires full body tension and exceptional strength in the back, core, and shoulders. Performed by holding the body horizontally while gripping a vertical pole, this exercise demonstrates elite levels of strength, balance, and control.",
    muscles: ["Back", "Core", "Shoulders"],
  },
  "weighted-chin-up-back": {
    video: "calisthenics/Back/Weighted Chin Up.mp4",
    name: "Weighted Chin Up",
    description: "The Weighted Chin Up is a chin-up variation performed with added weight, such as a weight belt or vest. The movement targets the back and biceps, increasing strength and muscle mass. This exercise is ideal for advanced athletes seeking to progress beyond bodyweight chin-ups.",
    muscles: ["Back", "Biceps"],
  },
  "suspension-inverted-row": {
    video: "calisthenics/Back/Suspension Inverted Row.mp4",
    name: "Suspension Inverted Row",
    description: "The Suspension Inverted Row is a back exercise performed with suspension straps. The movement involves pulling the chest toward the handles while keeping the body straight, targeting the back and biceps. This exercise improves upper body strength, grip, and stability.",
    muscles: ["Back", "Biceps"],
  },
  "wide-grip-rear-pull-up": {
    video: "calisthenics/Back/Wide Grip Rear Pull-Up.mp4",
    name: "Wide Grip Rear Pull-Up",
    description: "The Wide Grip Rear Pull-Up is a pull-up variation performed with a wide grip, pulling the chest behind the bar. This movement emphasizes the upper back and biceps, improving back width and strength.",
    muscles: ["Back", "Biceps"],
  },
  "pull-up-neutral-grip": {
    video: "calisthenics/Back/Pull-Up Neutral Grip.mp4",
    name: "Pull-Up Neutral Grip",
    description: "The Pull-Up Neutral Grip is a pull-up variation performed with the palms facing each other. This grip emphasizes the biceps and forearms while still engaging the back muscles. The movement is effective for building upper body strength and muscle mass.",
    muscles: ["Back", "Biceps"],
  },
  "muscle-up": {
    video: "calisthenics/Back/Muscle-up.mp4",
    name: "Muscle-up",
    description: "The Muscle-up is a powerful pull-up variation that transitions into a dip at the top of the movement. This exercise targets the back, chest, triceps, and shoulders, requiring significant strength, coordination, and explosiveness. It is a hallmark skill in advanced calisthenics and gymnastics.",
    muscles: ["Back", "Chest", "Triceps", "Shoulders"],
  },
  "close-grip-pull-up": {
    video: "calisthenics/Back/Close Grip Pull Up.mp4",
    name: "Close Grip Pull Up",
    description: "The Close Grip Pull Up is a pull-up variation performed with the hands close together. This grip emphasizes the lower lats and biceps, providing a unique stimulus compared to traditional wide-grip pull-ups. The movement is effective for building back and arm strength.",
    muscles: ["Back", "Biceps"],
  },
  "pull-up-wide-grip": {
    video: "calisthenics/Back/Pull-Up Wide Grip.mp4",
    name: "Pull-Up Wide Grip",
    description: "The Pull-Up Wide Grip is a pull-up variation performed with a wide grip, targeting the lats and upper back. The movement is effective for building back width and improving upper body strength.",
    muscles: ["Back", "Lats"],
  },
  "chin-up-back": {
    video: "calisthenics/Back/Chin-Up.mp4",
    name: "Chin-Up",
    description: "The Chin-Up is a pull-up variation performed with a supinated (palms facing you) grip. This grip emphasizes the biceps while still engaging the back muscles. The movement is effective for building upper body strength and muscle mass.",
    muscles: ["Back", "Biceps"],
  },
  "rings-pull-up": {
    video: "calisthenics/Back/Rings Pull-Up.mp4",
    name: "Rings Pull-Up",
    description: "The Rings Pull-Up is a pull-up variation performed on gymnastic rings, increasing instability and muscle activation. The movement targets the back, biceps, and shoulders, and requires significant strength, balance, and control.",
    muscles: ["Back", "Biceps", "Shoulders"],
  },
  "ring-muscle-up": {
    video: "calisthenics/Back/Ring Muscle Up.mp4",
    name: "Ring Muscle Up",
    description: "The Ring Muscle Up is a muscle-up variation performed on gymnastic rings. The movement transitions from a pull-up to a dip, targeting the back, chest, triceps, and shoulders. This exercise requires significant strength, coordination, and control.",
    muscles: ["Back", "Chest", "Triceps", "Shoulders"],
  },
  "front-lever": {
    video: "calisthenics/Back/Front Lever.mp4",
    name: "Front Lever",
    description: "The Front Lever is an advanced static hold that requires full body tension and exceptional strength in the back, core, and shoulders. Performed by holding the body horizontally while gripping a bar, this exercise demonstrates elite levels of strength, balance, and control.",
    muscles: ["Back", "Core", "Shoulders"],
  },
  "pull-up": {
    video: "calisthenics/Back/Pull-Up.mp4",
    name: "Pull-Up",
    description: "The Pull-Up is a classic bodyweight exercise that targets the back and biceps. Performed by pulling the chin above a bar, this exercise is fundamental for building upper body strength, endurance, and muscle definition.",
    muscles: ["Back", "Biceps"],
  },
  "weighted-pull-up": {
    video: "calisthenics/Back/Weighted Pull-Up.mp4",
    name: "Weighted Pull-Up",
    description: "The Weighted Pull-Up is a pull-up variation performed with added weight, such as a weight belt or vest. The movement targets the back and biceps, increasing strength and muscle mass. This exercise is ideal for advanced athletes seeking to progress beyond bodyweight pull-ups.",
    muscles: ["Back", "Biceps"],
  },
};
function Workout() {
  const {id} = useParams()
  const workout = workouts[id];
  if (!workout) {
    return <div>Workout not found</div>;
  }
  return (
    <>
      <div className="workoutPage">
        
          <h1>{workout.name}</h1>
          <video src={"/" + workout.video} autoPlay loop muted/>

          <p>{workout.description}</p>
          <h2>Muscles Worked: </h2>
          <ul>
            {workout.muscles.map((muscle, index) => (
              <h3 key={index}>{muscle}</h3>
            ))}
          </ul>
       
      </div>
    </>
  );
}

export default Workout;