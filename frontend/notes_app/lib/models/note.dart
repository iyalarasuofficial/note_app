class Note {
  final int? id;
  final String title;
  final String description;
  final bool done;

  Note({
    this.id,
    required this.title,
    required this.description,
    this.done = false,
  });

  factory Note.fromJson(Map<String, dynamic> json) {
    return Note(
      id: json['id'],
      title: json['title'],
      description: json['description'],
      done: json['done'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'title': title,
      'description': description,
      'done': done,
    };
  }

  Note copyWith({
    int? id,
    String? title,
    String? description,
    bool? done,
  }) {
    return Note(
      id: id ?? this.id,
      title: title ?? this.title,
      description: description ?? this.description,
      done: done ?? this.done,
    );
  }
}
